import React, { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IRoom,
  IUser,
  TRoomBlackList,
  TRoomInviteList,
  TRoomSearchUser,
  TRoomUser,
} from "src/redux/types";
import { useUserSearchMutation } from "src/redux/api/user.api";
import {
  useKickUserMutation,
  useCancelInviteMutation,
  useInviteUserMutation,
  useBannedUserMutation,
  useUnBannedRoomUserMutation,
} from "src/redux/api/room.api";
import {
  addUserToBlackList,
  addUserToRoomInviteList,
  deleteFromRoomInviteList,
  ignoreInvite,
  removeUserFromBlacklist,
} from "src/redux/features/user.slice";
import { toast } from "react-toastify";

export default function RoomBar({
  RoomID,
  socket,
  isMenuOpen,
  setIsMenuOpen,
}: any) {
  const dispatch = useDispatch();
  const Room: IRoom = useSelector((state: any) => state.user.rooms).find(
    (room: IRoom) => room._id === RoomID
  );
  const tabs = [
    { name: "Invite List", tabNumber: 0 },
    { name: "Room", tabNumber: 1 },
    { name: "Black List", tabNumber: 2 },
  ];
  const [isModerator, setIsModerator] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState(tabs[1]);
  const listsOverflow = useRef<any>();
  const user: IUser = useSelector((state: any) => state.user);
  const [userSearch, { data, isLoading, isError, error, isUninitialized }] =
    useUserSearchMutation();
  const [inviteUser, { isLoading: inviteUserLoading, originalArgs }] =
    useInviteUserMutation();
  const [kickUser] = useKickUserMutation();
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [userSearchData, setUserSearchData] = useState<
    unknown | TRoomInviteList[]
  >();
  const [cancelInvite] = useCancelInviteMutation();
  const [bannedUser] = useBannedUserMutation();
  const [unBannedRoomUser] = useUnBannedRoomUserMutation();

  useEffect(() => {
    const userRole = Room.users.find(
      (roomUser: TRoomUser) => roomUser.userId === user._id
    );
    if (userRole?.role !== "7610") {
      setIsModerator(true);
    }

    socket.on("invite canceled by admin", (roomID: string) => {
      dispatch(ignoreInvite(roomID));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    listsOverflow.current.scrollLeft =
      listsOverflow.current.clientWidth * selectedTab.tabNumber;
  }, [selectedTab]);

  useEffect(() => {
    setUserSearchData(data);
  }, [data]);

  const handleSearch = async () => {
    if (searchInputValue !== "") {
      try {
        await userSearch({
          query: searchInputValue,
          roomID: Room._id,
        }).unwrap();
      } catch (error) {}
    }
  };

  const handleInvite = async (userID: string, userName: string) => {
    try {
      await inviteUser({ roomID: Room._id, invitedUserId: userID }).unwrap();
      const inviteData = { id: userID, name: userName, roomID: Room._id };
      dispatch(addUserToRoomInviteList(inviteData));
      socket.emit("send invite", {
        users: Room.users,
        inviteData,
        roomName: Room.name,
      });
      setUserSearchData((userSearch: any) => {
        return userSearch.filter((user: any) => user._id !== userID);
      });
      toast.success("User invited successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const cancelInviteHandler = async (userID: string) => {
    try {
      await cancelInvite({ roomID: RoomID, canceledUserId: userID });
      dispatch(deleteFromRoomInviteList({ roomID: RoomID, userID }));
      socket.emit("admin cancel invite", { roomID: RoomID, userID });
    } catch (error) {
      toast.error("Sorry! try again later.");
    }
  };

  const kickHandler = async (userID: string) => {
    try {
      await kickUser({ roomID: RoomID, kickedUserID: userID });
      socket.emit("user kick", { RoomID, userID });
    } catch (error) {}
  };

  const banHandler = async ({ userID, userName, roomID }: any) => {
    try {
      await bannedUser({ roomID, bannedUserId: userID });
      dispatch(addUserToBlackList({ userID, userName, roomID }));
      socket.emit("ban user", { roomID: RoomID, userID, roomName: Room.name });
    } catch (error) {}
  };

  const unbanHandler = async (userID: any) => {
    try {
      await unBannedRoomUser({ roomID: RoomID, userID });
      dispatch(removeUserFromBlacklist({ roomID: RoomID, userID }));
    } catch (error) {}
  };

  return (
    <div>
      <div ref={listsOverflow}>
        <div className="directory">
          <div className="roomMembers">
            <div className="memberCount">
              Room Member <div className="count">{Room.users.length}</div>
            </div>
            {Room.users.map((roomUser: TRoomUser) => (
              <div className="roomMember" key={roomUser.userId}>
                <div className="avatar" />
                <div className="memberName">{roomUser.userName}</div>
                {isModerator && roomUser.userId !== user._id && (
                  <div className="menu">
                    <div className="menuItems">
                      <div className="py-1 px-1">
                        <div>
                          <h5 onClick={() => kickHandler(roomUser.userId)}>
                            Kick
                          </h5>
                        </div>
                        <div>
                          <h5
                            onClick={() =>
                              banHandler({
                                userID: roomUser.userId,
                                userName: roomUser.userName,
                                roomID: Room._id,
                              })
                            }
                          >
                            Ban
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {isModerator && (
          <>
            <div className="inviteList">
              <div className="search">
                <input
                  type="text"
                  value={searchInputValue}
                  onChange={(e) => setSearchInputValue(e.target.value)}
                  placeholder="search..."
                />
                <button onClick={handleSearch} />
                {!isUninitialized && (
                  <div className="searchResponse">
                    {isLoading ? (
                      <div className="searchLoading">
                        <div className="searchIcon">Search Icon</div>
                      </div>
                    ) : isError ? (
                      <div className="searchErrorMessage">Error message</div>
                    ) : (
                      (userSearchData as TRoomSearchUser[]) && (
                        <>
                          {(userSearchData as TRoomSearchUser[]).map(
                            (user: TRoomSearchUser) => (
                              <div className="roomMember" key={user._id}>
                                <div className="memberAvatar" />
                                <div className="memberName">
                                  {user.userName}
                                </div>
                                {inviteUserLoading &&
                                originalArgs?.invitedUserId === user._id ? (
                                  <div className="invited" />
                                ) : (
                                  <div
                                    className="inviteIcon"
                                    onClick={() =>
                                      handleInvite(user._id, user.userName)
                                    }
                                  />
                                )}
                              </div>
                            )
                          )}
                        </>
                      )
                    )}
                  </div>
                )}
              </div>
              {Room.inviteList.length === 0 ? (
                <div className="clear">Nope!</div>
              ) : (
                <div className="roomMembers">
                  <div className="memberCount">
                    Invite List{" "}
                    <div className="count">{Room.inviteList.length}</div>
                  </div>
                  {Room.inviteList.map((user: TRoomInviteList) => (
                    <div className="roomMember" key={user._id}>
                      <div className="memberAvatar" />
                      <div className="memberName">{user.name}</div>
                      <div
                        className="circleXIcon"
                        onClick={() => cancelInviteHandler(user._id)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="blackList">
              {Room.blackList.length === 0 ? (
                <div className="clear">Nope!</div>
              ) : (
                <div className="roomMembers">
                  <div className="memberCount">
                    Black List{" "}
                    <div className="count">{Room.blackList.length}</div>
                  </div>
                  {Room.blackList.map((user: TRoomBlackList) => (
                    <div className="roomMember" key={user._id}>
                      <div className="memberAvatar" />
                      <div className="memberName">{user.name}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
