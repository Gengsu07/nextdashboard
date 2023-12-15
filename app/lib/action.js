"use server";

import { Product, User } from "./models";
import { connnectToDB } from "./utils";

export const HandleAddProduct = async (formData) => {
  const { title, category, price, stock, color, size, description } =
    Object.fromEntries(formData);
  //   console.log(title);
  try {
    connnectToDB();
    const newProduct = new Product({
      title,
      category,
      price,
      stock,
      color,
      size,
      description,
    });
    const addedProduct = await newProduct.save();

    if (addedProduct) {
    } else {
      console.error("Failed to save product");
      throw new Error("Failed to save product");
    }
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const HandleAddUser = async (formData) => {
  const { username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);
  try {
    connnectToDB();
    const newUser = new User({
      username,
      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    });
    const addedUser = await newUser.save();

    if (addedUser) {
      // console.log(`add user:${addedUser.get("username")} Success`);
    } else {
      console.error("Failed to save user");
      throw new Error("Failed to save user");
    }
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
