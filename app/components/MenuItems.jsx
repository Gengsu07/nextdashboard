import Link from "next/link";

const MenuItems = ({ item }) => {
  const Icon = item.icon;
  return (
    <Link
      href={item.path}
      className="flex items-center gap-3 p-3 hover:bg-[#2e374a] rounded-xl mr-3 max-w-full"
    >
      {Icon}
      {item.title}
    </Link>
  );
};

export default MenuItems;
