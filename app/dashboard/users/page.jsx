import Search from "../../components/search";
import Image from "next/image";
import { usertabledata } from "../../constant/TableData";
import Pagination from "../../components/pagination";

const UsersPage = () => {
  return (
    <div className="bgSoft rounded-lg mt-5 w-full">
      <Search placeholder="Search for a user" />
      <table className=" table-auto border border-slate-50 w-full px-5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {usertabledata.map((row) => (
            <tr key={row.Name}>
              <td className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/noavatar.png"
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full object-cover border-2"
                  />
                </div>
                {row.Name}
              </td>
              <td>{row.Email}</td>
              <td>{row.Created_at}</td>
              <td>{row.Role}</td>
              <td>{row.Status}</td>
              <td>
                <div className="flex gap-2 items-center justify-between max-w-fit">
                  <button className="bg-green-600 hover:bg-green-800 rounded-lg text-white px-2 py-1 text-sm border-0">
                    view
                  </button>
                  <button className="bg-red-600 hover:bg-red-800 rounded-lg text-white py-1 px-2 text-sm border-0">
                    delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-5 mx-5 px-2">
        <Pagination />
      </div>
    </div>
  );
};

export default UsersPage;
