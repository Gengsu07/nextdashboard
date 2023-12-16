"use server";

import { Product, User } from "./models";
import { connnectToDB } from "./utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signIn } from "../auth";

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
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const HandleAddUser = async (formData) => {
  const { username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);
  const salt = await bcrypt.genSaltSync(10);
  const passwordHashed = await bcrypt.hash(password, salt);
  try {
    connnectToDB();
    const newUser = new User({
      username,
      email,
      password: passwordHashed,
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
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const handleDeleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connnectToDB();
    const deletedUser = await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
  revalidatePath("/dashboard/users");
};

export const handleDeleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connnectToDB();
    const deletedProduct = await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
  revalidatePath("/dashboard/users");
};

export const handleUpdateUser = async (formData) => {
  const { id, username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  const updatedField = {
    username,
    email,
    password,
    phone,
    isAdmin,
    isActive,
    address,
  };

  Object.keys(updatedField).map((key) => {
    (updatedField[key] == "" || undefined) && delete updatedField[key];
  });

  try {
    connnectToDB();
    const updatedUser = await User.findByIdAndUpdate(id, updatedField);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const handleUpdateProduct = async (formData) => {
  const { id, title, category, price, stock, color, size, description } =
    Object.fromEntries(formData);

  const updatedField = {
    title,
    category,
    price,
    stock,
    color,
    size,
    description,
  };

  Object.keys(updatedField).map((key) => {
    (updatedField[key] == "" || undefined) && delete updatedField[key];
  });

  try {
    connnectToDB();
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedField);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
    // console.log(status);
    // redirect("/dashboard");
  } catch (err) {
    return "Wrong Credentials";
  }
};
