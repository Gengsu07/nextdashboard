import Toolbar from "../../components/Toolbar";

import Pagination from "../../components/pagination";
import { fetchUser } from "../../lib/data";
import UserTable from "./userTable";

const UsersPage = async () => {
  const users = await fetchUser();
  return (
    <div className="bgSoft flex flex-col gap-5 rounded-lg mt-5 w-full px-5 py-5">
      <Toolbar placeholder="Search for a user" dest="/dashboard/users/add" />
      <div className="w-full">
        <UserTable />
      </div>
      <div className="w-full">
        <Pagination />
      </div>
    </div>
  );
};

export default UsersPage;
