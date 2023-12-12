import mongoose from "mongoose";

export const connnectToDB = async () => {
  const connection = {};
  try {
    if (mongoose.connection.readyState === 1) return;
    const db = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error(error);
  }
};
