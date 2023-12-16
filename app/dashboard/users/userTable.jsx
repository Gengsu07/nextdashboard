import Image from "next/image";
import Link from "next/link";
import { handleDeleteUser } from "./../../lib/action";

const UserTable = ({ data }) => {
  return (
    <table className="w-full ">
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created at</td>
          <td>Role</td>
          <td>Status</td>
          <td>Phone</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.username}>
            <td className="flex gap-3 items-center">
              <div className="flex gap-2 items-center">
                <Image
                  src={user.img || "/noavatar.png"}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover border-1"
                />
              </div>
              {user.username}
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(4, 16)}</td>
            <td>{user.isAdmin ? "Admin" : "Client"}</td>
            <td>{user.isActive ? "active" : "passive"}</td>
            <td>{user.phone}</td>
            <td>
              <div className="flex gap-2 items-center justify-between max-w-fit">
                <Link href={`/dashboard/users/${user._id.valueOf()}`}>
                  <button className="bg-teal-600 hover:bg-teal-800 rounded-lg text-white px-2 py-1 text-sm border-0">
                    view
                  </button>
                </Link>
                <form action={handleDeleteUser}>
                  <input type="hidden" name="id" value={user._id.valueOf()} />
                  <button className="bg-red-600 hover:bg-red-800 rounded-lg text-white py-1 px-2 text-sm border-0">
                    delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
