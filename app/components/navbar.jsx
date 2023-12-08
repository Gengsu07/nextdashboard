"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const NavbarTitle = pathname.split("/").pop();
  return (
    // container
    <div className="flex justify-between items-center p-3 rounded-xl bgSoft">
      <div className="textSoft font-bold capitalize">{NavbarTitle}</div>
      <div className="flex justify-center items-center gap-5">
        <div className="bg-[#2e374a] p-2 rounded-xl flex justify-center items-center gap-2">
          <MdSearch />
          <input
            type="text"
            placeholder="search here"
            className="bg-transparent border-none px-2 py-1 text-white outline-none"
          />
        </div>
        <div className="flex justify-center items-center gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
