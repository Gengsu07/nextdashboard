import { MdLogout } from "react-icons/md";
import menuItems from "../constant/SidebarMenu";
import MenuItems from "./MenuItems";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="flex flex-grow flex-col position-sticky top-10 ml-5 my-5 max-w-full">
      <div className="flex items-center gap-5 mb-5 ">
        <Image
          src="/noavatar.png"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium">John Doe</span>
          <span className="textSoft text-[12px]">Administrator</span>
        </div>
      </div>
      <ul className="text-decoration-none max-w-full">
        {menuItems.map((menu) => (
          <li key={menu.title}>
            <span className="textSoft font-bold text-[13px] my-3 max-w-full">
              {menu.title}
            </span>
            {menu.list.map((item) => (
              // <p key={item.title}>{item.path}</p>
              <MenuItems key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className="flex items-center gap-2 p-3 mr-3 my-5  border-none rounded-xl cursor-pointer max-w-full hover:bg-[#2e374a]">
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
