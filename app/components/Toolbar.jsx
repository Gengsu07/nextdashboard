import { MdSearch } from "react-icons/md";
import Link from "next/link";

const Toolbar = ({ placeholder, dest }) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex justify-start gap-0 items-center border-0 rounded-lg bg-[#2e374a] pl-1 py-0">
        <MdSearch />
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent border-none pl-1 py-1 text-white outline-none rounded-lg"
        ></input>
      </div>

      <Link href={dest}>
        <button className="bg-violet-600 hover:bg-violet-800 flex justify-start items-center rounded-lg border-3 text-white cursor-pointer mr-16 py-1 px-5">
          Add
        </button>
      </Link>
    </div>
  );
};

export default Toolbar;
