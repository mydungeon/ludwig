import React, { useState, useEffect, useRef, Fragment } from "react";
import { useSelector } from "react-redux";
import RoomBar from "./RoomBar";
import {
  useGetRoomMessageMutation,
  useSendMessageMutation,
} from "src/redux/api/msg.api";
import { toast } from "react-toastify";
import { IMessage, IRoom, TRoomUser } from "src/redux/types";
import {
  useDeleteRoomMutation,
  useEditRoomNameMutation,
  useUserLeaveRoomMutation,
} from "src/redux/api/room.api";
import {
  addRoomMessage,
  changeRoomName,
  removeRoom,
  selectRoom,
  setRoomMessages,
} from "src/redux/features/user.slice";
import { useDispatch } from "react-redux";

export default function ChatContainer({ socket }: any) {
  const selectedRoom: string = useSelector(
    (state: any) => state.user.selectedRoomID
  );
  const userID = useSelector((state: any) => state.user.userID);
  const Room: IRoom = useSelector((state: any) => state.user.rooms).find(
    (room: IRoom) => room._id === selectedRoom
  );
  const [isModerator, setIsModerator] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>(Room.messages);
  const [inputValue, setInputValue] = useState<string>("");
  const [getRoomMessage, { isLoading, isSuccess }] =
    useGetRoomMessageMutation();
  const [sendMessage] = useSendMessageMutation();
  const chatScroll: any = useRef();
  const [deleteRoom] = useDeleteRoomMutation();
  const [editRoomName] = useEditRoomNameMutation();
  const dispatch = useDispatch();
  const [userLeaveRoom] = useUserLeaveRoomMutation();

  const getMessages = async () => {
    try {
      const data = await getRoomMessage(selectedRoom as string).unwrap();
      dispatch(setRoomMessages({ roomID: Room._id, messages: data }));
    } catch (error) {
      toast.error("refresh the page!");
    }
  };

  useEffect(() => {
    document.title = `Chatter - ${Room.name}`;
    getMessages();
    socket.emit("join chat", selectedRoom);

    return () => {
      setMessages([]);
    };
  }, [selectedRoom]);

  useEffect(() => {
    const userRole = Room.users.find(
      (roomUser: TRoomUser) => roomUser.userId === userID
    );
    if (userRole?.role !== "7610") {
      setIsModerator(true);
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
      }, 200);
    }
  }, [Room.messages, isSuccess]);

  const enterPressed = (e: any) => {
    if (e.keyCode === 13) {
      submit();
    }
  };

  const handleChange = (e: any) => {
    setInputValue(e.currentTarget.value);
  };

  const deleteRoomHandler = async () => {
    try {
      await deleteRoom(selectedRoom);
      socket.emit("delete room", {
        roomUsers: Room.users,
        myID: userID,
        roomID: Room._id,
        roomName: Room.name,
      });
    } catch (error) {}
  };

  const changeRoomNameHandler = async () => {
    try {
      const newName = prompt("enter new room name");
      if (newName && newName !== "") {
        await editRoomName({ roomID: selectedRoom, newRoomName: newName });
        dispatch(
          changeRoomName({ roomID: selectedRoom, newRoomName: newName })
        );
        socket.emit("change room name", {
          roomID: selectedRoom,
          newRoomName: newName,
          roomUsers: Room.users,
          myID: userID,
        });
      }
    } catch (error) {}
  };

  const leaveRoomHandler = async () => {
    if (window.confirm("you sure you want leave the room?")) {
      try {
        await userLeaveRoom({ roomID: selectedRoom, userID: userID });
        dispatch(removeRoom(selectedRoom));
        socket.emit("user leave the room", {
          roomID: selectedRoom,
          userID: userID,
          roomUsers: Room.users,
        });
      } catch (error) {}
    }
  };

  const submit = async () => {
    if (inputValue !== "") {
      try {
        const response: { message: IMessage } = await sendMessage({
          message: inputValue,
          roomID: selectedRoom,
        }).unwrap();
        dispatch(
          addRoomMessage({ roomID: Room._id, newMessage: response.message })
        );
        socket.emit("new message", {
          users: Room.users,
          response: response.message,
        });
        setInputValue("");
      } catch (error) {
        toast.error("cant send message");
      }
    }
  };

  return (
    <>
      {Room && isLoading && <div>is loading...</div>}
      {Room && isSuccess && (
        <>
          <div>
            <div>
              <div>
                <div
                  className="mr-3 text-black dark:text-white md:hidden"
                  onClick={() => dispatch(selectRoom(null))}
                />
                <div onClick={() => setIsMenuOpen(true)} />
                <div>{Room.name}</div>
                <div className="relative ml-auto inline-block text-left">
                  <div>
                    <div className="inline-flex w-full justify-center rounded-md text-sm font-medium">
                      <div className="text-black dark:text-white" />
                    </div>
                  </div>

                  <div>
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1 px-1">
                        {isModerator ? (
                          <>
                            <div>
                              <div onClick={() => changeRoomNameHandler()}>
                                rename room
                              </div>
                            </div>
                            <div>
                              <h5 onClick={deleteRoomHandler}>delete room</h5>
                            </div>
                          </>
                        ) : (
                          <div>
                            <h5 onClick={leaveRoomHandler}>leave room</h5>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div ref={chatScroll}>
                  {Room.messages &&
                    Room.messages.map((message: IMessage) => {
                      if (message.senderID === userID) {
                        return (
                          <div key={message._id}>
                            <div>{message.message}</div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={message._id}>
                            <div>{message.senderName}</div>
                            <div>{message.message}</div>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
              <div>
                <input
                  placeholder="Type a message"
                  value={inputValue}
                  onChange={handleChange}
                  onKeyDown={enterPressed}
                />
                <div onClick={submit} />
              </div>
            </div>
          </div>
          <RoomBar
            RoomID={Room._id}
            socket={socket}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      )}
    </>
  );
}
