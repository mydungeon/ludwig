import mongoose from "mongoose";
import config from "config";

const dbUrl = `mongodb://${config.get("dbUser")}:${config.get(
  "dbPass"
)}@mongo:27017/ludwigDb?authSource=admin`;

const connectDB = async () => {
  try {
    console.log(`Connection string: ${dbUrl}`);
    await mongoose.connect(dbUrl);
    console.log("Database connected...");
  } catch (error: any) {
    console.log(`Error connecting to Mongo: ${error.message}`);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
