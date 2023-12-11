import { User } from "./models";
import { connnectToDB } from "./utils";

export const fetchUser = async () => {
  try {
    connnectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
