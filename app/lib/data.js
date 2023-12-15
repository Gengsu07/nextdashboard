import { User, Product } from "./models";
import { connnectToDB } from "./utils";

export const fetchUser = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;
  try {
    connnectToDB();
    const countUser = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);
    return { countUser, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchProduct = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 5;
  try {
    connnectToDB();
    const countProducts = await Product.find({
      title: { $regex: regex },
    }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);
    return { countProducts, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch products");
  }
};
