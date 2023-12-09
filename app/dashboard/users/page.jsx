import Search from "../../components/search";
import Image from "next/image";

const UsersPage = () => {
  return (
    <div className="bgSoft rounded-lg mt-5">
      <Search placeholder="Search for a user" />
      <table className="w-full">
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
          <tr>
            <td>
              <div className="flex gap-2 items-center">
                <Image
                  src="/noavatar.png"
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover border-2"
                />
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div>
                <button>view</button>
                <button>delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
