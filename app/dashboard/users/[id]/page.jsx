import React from "react";
import Image from "next/image";
import { fetchUser } from "../../../lib/data";
import { handleUpdateUser } from "../../../lib/action";

const UserDetailPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className="flex justify-between gap-5 w-full h-screen mt-5 max-sm:flex-col">
      <div className="flex flex-col w-[40%] bgSoft rounded-lg px-5 py-5 h-fit max-sm:mx-auto">
        <div className="rounded-lg w-fit mb-5 mx-auto my-auto">
          <Image
            src={user.img || "/noavatar.png"}
            alt="avatar"
            width={300}
            height={400}
            className="rounded-md object-cover border-2"
          />
        </div>
        <p>{user.username}</p>
      </div>

      <form
        action={handleUpdateUser}
        className="flex flex-col gap-5 bgSoft w-full px-5 py-5 rounded-lg"
      >
        <input type="hidden" name="id" value={user._id.valueOf()} />
        <div className="flex flex-col gap-1">
          <label>username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            className="bgCard px-3 py-3 borderTipis outline-none rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            className="bgCard px-3 py-3 borderTipis outline-none rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>password</label>
          <input
            type="password"
            name="password"
            placeholder={user.password}
            className="bgCard px-3 py-3 borderTipis outline-none rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>phone</label>
          <input
            type="number"
            name="phone"
            placeholder={user.phone}
            className="bgCard px-3 py-3 borderTipis outline-none rounded-lg"
          />
        </div>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="16"
          placeholder={user.address || ""}
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
          <option value={user.isAdmin}>Yes</option>
          <option value={!user.isAdmin}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none bgSoft rounded-lg"
        >
          <option value={true} defaultValue={true}>
            is Active?
          </option>
          <option value={user.isActive}>Yes</option>
          <option value={!user.isActive}>No</option>
        </select>
        <button className="w-full px-7 py-3 text-white bg-teal-500 rounded-lg cursor-pointer border-none">
          Update
        </button>
      </form>
    </div>
  );
};

export default UserDetailPage;
