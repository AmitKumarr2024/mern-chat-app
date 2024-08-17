import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log("Error connecting to Mongodb:", error);
  }
};

export default connectToMongoDb;