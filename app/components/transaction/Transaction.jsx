import Image from "next/image";
import tableData from "../../constant/LatestTransaction";

const Transaction = () => {
  const statusStyle = "border-3 p-2 text-[14px] text-white rounded-lg";

  return (
    <div className="bgSoft p-5 border-3 rounded-xl">
      <h2 className="mb-5 font-extralight textSoft">Latest Transaction</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.name}>
              <td>
                <div className="flex gap-3 items-center">
                  <Image
                    src="/noavatar.png"
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full object-cover border-2"
                  />
                  {row.name}
                </div>
              </td>
              <td>
                <span
                  className={`${statusStyle} ${
                    row.status === "Done"
                      ? "bg-[#afd6ee75]"
                      : row.status === "Pending"
                      ? "bg-[#f7cb7375]"
                      : "bg-[#f7737375]"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td>{row.date}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
