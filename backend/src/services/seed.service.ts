import { userModel } from "../models/user.model";

// CreateUser service
export const seedBulkUsers = async (input: any) => {
  try {
    const bulkUsers = await userModel.bulkWrite(input, { ordered: false });
    return bulkUsers;
  } catch (err: any) {
    console.log("bulkUser operation error", err);
    return err;
  }
};
