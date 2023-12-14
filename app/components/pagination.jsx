"use client";
import classNames from "classnames";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;
  const ITEM_PER_PAGE = 2;
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
    <div className="flex justify-start gap-5 items-center w-full">
      <button
        className={classNames({
          "bg-slate-50 text-slate-500 hover:text-white px-3 py-1 rounded-md border-0 outline-none hover:bg-slate-500 cursor-pointer": true,
          "bg-transparent hover:bg-transparent cursor-not-allowed ": !hasPrev,
        })}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Prev
      </button>
      <button
        className={classNames({
          "bg-slate-50 text-slate-500 hover:text-white px-3 py-1 rounded-md border-0 outline-none hover:bg-slate-500 cursor-pointer": true,
          "bg-transparent hover:bg-transparent cursor-not-allowed": !hasNext,
        })}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
