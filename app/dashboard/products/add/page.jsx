import React from "react";

const AddProductPage = () => {
  return (
    <div className=" mt-5 bgSoft rounded-xl h-screen">
      <form className="flex flex-wrap justify-between gap-5 px-5 my-5">
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          className="w-[45%] bgCard px-3 py-3 borderTipis outline-none rounded-lg"
        />
        <select
          name="category"
          id="category"
          className="w-[45%] bgCard px-3 py-2  borderTipis outline-none bgSoft rounded-lg"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="price"
          required
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none rounded-lg"
        />
        <input
          type="number"
          name="stock"
          placeholder="stock"
          required
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none rounded-lg"
        />
        <input
          type="text"
          name="color"
          placeholder="color"
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none rounded-lg"
        />
        <input
          type="text"
          name="size"
          placeholder="size"
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none rounded-lg"
        />
        <textarea
          name="description"
          cols="30"
          rows="16"
          placeholder="Description"
          className="w-full bgCard px-3 py-3  borderTipis outline-none rounded-lg"
        />
        <button className="w-full px-7 py-3 text-white bg-teal-500 rounded-lg cursor-pointer border-none">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
