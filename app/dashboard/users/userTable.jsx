import Image from "next/image";
import { usertabledata } from "../../constant/TableData";
import Link from "next/link";

const UserTable = () => {
  return (
    <table className="w-full ">
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
                <Link href={`/dashboard/users/${row.Userid}`}>
                  <button className="bg-teal-600 hover:bg-teal-800 rounded-lg text-white px-2 py-1 text-sm border-0">
                    view
                  </button>
                </Link>
                <button className="bg-red-600 hover:bg-red-800 rounded-lg text-white py-1 px-2 text-sm border-0">
                  delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
