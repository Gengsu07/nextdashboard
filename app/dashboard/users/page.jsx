import Toolbar from "../../components/Toolbar";

import Pagination from "../../components/pagination";
import { fetchUser } from "../../lib/data";
import UserTable from "./userTable";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const users = await fetchUser(q);
  return (
    <div className="bgSoft flex flex-col gap-5 rounded-lg mt-5 w-full px-5 py-5">
      <Toolbar
        placeholder="Min 3 char to search user"
        dest="/dashboard/users/add"
      />
      <div className="w-full">
        <UserTable data={users} />
      </div>
      <div className="w-full">
        <Pagination />
      </div>
    </div>
  );
};

export default UsersPage;
