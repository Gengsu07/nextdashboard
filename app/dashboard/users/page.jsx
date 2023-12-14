import Toolbar from "../../components/Toolbar";

import Pagination from "../../components/pagination";
import { fetchUser } from "../../lib/data";
import UserTable from "./userTable";

const UsersPage = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const q = searchParams?.q || "";
  const { countUser, users } = await fetchUser(q, page);
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
        <Pagination count={countUser} />
      </div>
    </div>
  );
};

export default UsersPage;
