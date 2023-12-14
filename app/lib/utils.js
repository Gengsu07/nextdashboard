import mongoose from "mongoose";

export const connnectToDB = async () => {
  const connection = {};
  try {
    if (mongoose.connection.readyState === 1) return;
    // const db = await mongoose.connect(process.env.MONGO_URI);
    const db = await mongoose.connect(
      "mongodb+srv://Gengsu07:Gengsu!sh3r3@gengsu07.puspunt.mongodb.net/nextdashboard?retryWrites=true&w=majority"
    );
  } catch (error) {
    throw new Error(error);
  }
};
