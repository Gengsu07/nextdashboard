"use client";
import classNames from "classnames";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;
  const ITEM_PER_PAGE = 5;
  const params = new URLSearchParams(searchParams);

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) >= ITEM_PER_PAGE;
  console.log(!hasPrev);
  const hasNext = ITEM_PER_PAGE * parseInt(page) < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="flex justify-between items-center  w-full">
      <div className="flex justify-start gap-5 items-center w-full">
        {hasPrev && (
          <button
            className={classNames({
              "bg-slate-50 text-slate-500 hover:text-white px-3 py-1 rounded-md border-0 outline-none hover:bg-slate-500 cursor-pointer": true,
            })}
            onClick={() => handleChangePage("prev")}
          >
            Prev
          </button>
        )}
        {hasNext && (
          <button
            className={classNames({
              "bg-slate-50 text-slate-500 hover:text-white px-3 py-1 rounded-md border-0 outline-none hover:bg-slate-500 cursor-pointer": true,
            })}
            onClick={() => handleChangePage("next")}
          >
            Next
          </button>
        )}
      </div>
      <p className="whitespace-nowrap">
        Page {page} of {Math.ceil(count / ITEM_PER_PAGE)}
      </p>
    </div>
  );
};

export default Pagination;
