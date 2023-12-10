import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: {
      type: String,
    },
    phone: { type: String },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    address: { type: String },
  },
  { timestamps: true }
);

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    img: {
      type: String,
    },
    color: { type: String },
    size: { type: String },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.model.Product || mongoose.model("Product", ProductSchema);
