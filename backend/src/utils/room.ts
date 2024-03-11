import RoomModel from "../models/room.model";

const getUserJoinedChats = async (userID: any) => {
  const rooms = await RoomModel.find({
    "users.userId": userID.toString(),
  }).distinct("_id");
  return rooms;
};

export { getUserJoinedChats };
