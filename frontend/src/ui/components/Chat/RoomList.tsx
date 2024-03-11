import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/redux/store";
import {
  addToInviteList,
  removeRoom,
  selectRoom,
  userJoinedRoom,
  toggleCreateRoomModal,
} from "src/redux/features/user.slice";
import { IRoom, IUser, TUserInviteList } from "src/redux/types";
import {
  useAcceptRoomInviteMutation,
  useIgnoreRoomInviteMutation,
} from "src/redux/api/user.api";
import { toast } from "react-toastify";

export default function RoomList({ socket }: any) {
  const user: IUser = useSelector((state: any) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [acceptRoomInvite] = useAcceptRoomInviteMutation();
  const [ignoreRoomInvite] = useIgnoreRoomInviteMutation();

  const roomHandler = (roomID: string) => {
    dispatch(selectRoom(roomID));
  };

  const acceptInvite = async (roomID: string) => {
    try {
      await acceptRoomInvite(roomID);
      socket.emit("remove from room invite list", {
        roomID,
        userID: user._id,
      });
      socket.emit("user accept invite", {
        roomID,
        userID: user._id,
        userName: user.name,
      });
    } catch (error) {}
  };

  const ignoreInvite = async (roomID: string) => {
    await ignoreRoomInvite(roomID);
    socket.emit("remove from room invite list", {
      roomID,
      userID: user._id,
    });
  };

  useEffect(() => {
    socket.on("get invite for user", (receivedData: any) => {
      const inviteData = {
        _id: receivedData._id,
        name: receivedData.name,
      };
      dispatch(addToInviteList(inviteData));
    });

    socket.on("user joined room", (receiveData: any) => {
      dispatch(
        userJoinedRoom({
          roomID: receiveData.roomID,
          userID: receiveData.userID,
          userName: receiveData.userName,
        })
      );
    });

    socket.on("banned by admin", (receiveData: any) => {
      dispatch(removeRoom(receiveData.roomID));
      toast.info(`you are banned from ${receiveData.roomName}`);
    });

    socket.on("remove room", (receiveData: any) => {
      console.log(receiveData);
      dispatch(removeRoom(receiveData.roomID));
      toast.info(`you are banned from ${receiveData.roomName}`);
    });
  }, []);

  return (
    <div>
      <div className="header">
        <div>Message</div>
        <div
          className="createRoomIcon"
          onClick={() => dispatch(toggleCreateRoomModal())}
        />
      </div>
      {user.inviteList.length !== 0 && (
        <div className="inviteList">
          <div className="rounded-lg bg-my-light-purple/[0.5] p-5">
            <p className="font-Inter text-base font-bold text-white">
              You Are Invited To:
            </p>
            {user.inviteList.map((invitedRoom: TUserInviteList) => (
              <div className="inviteListRoom" key={invitedRoom._id}>
                <div className="room">
                  <div className="roomImage" />
                  <div className="flex w-full items-center justify-between">
                    <div className="roomName">{invitedRoom.name}</div>
                    <div className="flex">
                      <div
                        className="checkCircleIcon"
                        onClick={() => acceptInvite(invitedRoom._id)}
                      />
                      <div
                        className="circleXIcon"
                        onClick={() => ignoreInvite(invitedRoom._id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {user.rooms.length === 0 ? (
        <div className="noRoom">Join or create room!</div>
      ) : (
        <div className="rooms">
          {user.rooms.map((room: IRoom) => (
            <div
              className="room"
              key={room._id}
              onClick={() => roomHandler(room._id)}
            >
              <div className="roomImage" />
              <div className="flex flex-col items-center justify-center">
                <div className="roomName">{room.name}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
