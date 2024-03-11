import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { Chat } from "src/ui/components";
import {
  addRoomMessage,
  changeRoomName,
  deleteFromRoomInviteList,
  removeRoom,
  removeUserFromRoom,
  selectRoom,
} from "src/redux/features/user.slice";
import { toast } from "react-toastify";
import { IMessage } from "src/redux/types";

let socket: any;

export default function ChatPage() {
  const selectedRoom: any = useSelector(
    (state: any) => state.user.selectedRoomID
  );
  const currentUserID = useSelector((state: any) => state.user.userID);
  const isCreateRoomModalOpen = useSelector(
    (state: any) => state.user.isCreateRoomModalShow
  );
  const dispatch = useDispatch();
  const [isRoomListOpen, setIsRoomListOpen] = useState(true);
  socket = io(String("http://localhost:3001"));

  useEffect(() => {
    document.title = "Chatter";

    socket.onAny((eventName: any, ...args: any) => {
      console.log(eventName, args);
    });
    socket.emit("setup", currentUserID);

    socket.on("user kicked", (receiveData: any) => {
      dispatch(selectRoom(null));
      dispatch(removeRoom(receiveData));
      toast.info("you are kicked from a room");
    });

    socket.on("user removed from room invite list", (receiveData: any) => {
      dispatch(
        deleteFromRoomInviteList({
          roomID: receiveData.roomID,
          userID: receiveData.userID,
        })
      );
    });

    socket.on("room name changed", (receiveData: any) => {
      dispatch(
        changeRoomName({
          roomID: receiveData.roomID,
          newRoomName: receiveData.newRoomName,
        })
      );
    });

    socket.on("user leave the room", (receiveData: any) => {
      dispatch(
        removeUserFromRoom({
          roomID: receiveData.roomID,
          userID: receiveData.userID,
        })
      );
    });

    socket.on("new message", (newMessageReceived: IMessage) => {
      dispatch(
        addRoomMessage({
          roomID: newMessageReceived.roomID,
          newMessage: newMessageReceived,
        })
      );
    });
  }, []);

  return (
    <div>
      <div>
        <div>
          <div>Profile Bar</div>
          <Chat.RoomList
            socket={socket}
            isRoomListOpen={isRoomListOpen}
            setIsRoomListOpen={setIsRoomListOpen}
          />
        </div>
        {selectedRoom && <Chat.ChatContainer socket={socket} />}
        <div>{isCreateRoomModalOpen && <Chat.CreateRoomModal />}</div>
      </div>
    </div>
  );
}
