import { HandleAddUser } from "../../../lib/action";
import Link from "next/link";

const AddUsersPage = () => {
  return (
    <div className=" mt-5 bgSoft rounded-xl h-fit">
      <form
        className="flex flex-wrap  justify-between gap-5 px-5 my-5"
        action={HandleAddUser}
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          className="w-[45%] bgCard px-3 py-3 borderTipis outline-none rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="w-[45%] bgCard px-3 py-3 borderTipis outline-none rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          className="w-[45%] bgCard px-3 py-3 borderTipis outline-none rounded-lg"
        />
        <input
          type="number"
          name="phone"
          placeholder="phone"
          className="w-[45%] bgCard px-3 py-3 borderTipis outline-none rounded-lg"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none bgSoft rounded-lg"
        >
          <option value={false} defaultValue>
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
          <option value={true} defaultValue>
            is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          cols="30"
          rows="8"
          placeholder="address"
          className="w-full bgCard px-3 py-2  borderTipis outline-none rounded-lg"
        />

        <button className="w-full rounded-lg cursor-pointer border-none hover:bg-teal-800  text-white bg-teal-500  px-7 py-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUsersPage;
