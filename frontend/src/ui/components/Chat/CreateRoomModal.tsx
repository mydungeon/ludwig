import React, { useEffect, useState } from "react";
import { useCreateRoomMutation } from "src/redux/api/room.api";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { toggleCreateRoomModal } from "src/redux/features/user.slice";

export default function CreateRoomModal() {
  const [roomName, setRoomName] = useState<string>("");
  const [createRoom, { isSuccess, isError, isLoading }] =
    useCreateRoomMutation();
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roomName === "") {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [roomName]);

  const handleCreateRoom = async () => {
    try {
      await createRoom(roomName);
      toast.success("Room created.");
      dispatch(toggleCreateRoomModal());
    } catch (error) {
      toast.success("try again later!.");
    }
  };

  return (
    <div>
      <div>
        <div>
          <h5 className="font-DMSans">Create New Room</h5>
          <div
            className="cursor-pointer text-my-light-purple"
            onClick={() => dispatch(toggleCreateRoomModal())}
          />
        </div>
        <div>
          <h5 className="font-Inter text-sm">room name</h5>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <button disabled={canSubmit} onClick={handleCreateRoom}>
            "Create"
          </button>
        </div>
      </div>
    </div>
  );
}
