import React from "react";
import Image from "next/image";

const UserDetailPage = () => {
  const label = [
    {
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "username07",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "username07@gmail.com",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "secret123",
    },
    {
      label: "Phone",
      type: "phone",
      name: "phone",
      placeholder: "085xxxx",
    },
  ];
  return (
    <div className="flex justify-between gap-5 w-full h-screen mt-5 max-sm:flex-col">
      <div className="flex flex-col w-[40%] bgSoft rounded-lg px-5 py-5 h-fit max-sm:mx-auto">
        <div className="rounded-lg w-fit mb-5 mx-auto my-auto">
          <Image
            src="/noavatar.png"
            alt="avatar"
            width={300}
            height={400}
            className="rounded-md object-cover border-2"
          />
        </div>
        <p>John Doe</p>
      </div>
      <div className="flex flex-col gap-5 bgSoft w-full px-5 py-5 rounded-lg">
        {label.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <label>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              className="bgCard px-3 py-3 borderTipis outline-none rounded-lg"
            />
          </div>
        ))}
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="16"
          placeholder="address"
          className="w-full bgCard px-3 py-2  borderTipis outline-none rounded-lg"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none bgSoft rounded-lg"
        >
          <option value={false} defaultValue={true}>
            is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none bgSoft rounded-lg"
        >
          <option value={true} defaultValue={true}>
            is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button className="w-full px-7 py-3 text-white bg-teal-500 rounded-lg cursor-pointer border-none">
          Update
        </button>
      </div>
    </div>
  );
};

export default UserDetailPage;
