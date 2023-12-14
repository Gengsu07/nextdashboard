import { User } from "./models";
import { connnectToDB } from "./utils";

export const fetchUser = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connnectToDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
