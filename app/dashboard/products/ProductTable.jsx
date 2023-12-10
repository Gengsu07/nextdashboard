import Image from "next/image";
import { producttabledata } from "../../constant/TableData";
import Link from "next/link";

const ProductTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created at</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {producttabledata.map((row) => (
          <tr key={row.Description}>
            <td className="flex gap-3 items-center">
              <div className="flex gap-2 items-center">
                <Image
                  src="/noproduct.jpg"
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover border-2"
                />
              </div>
              {row.Title}
            </td>
            <td>{row.Description}</td>
            <td>{row.Price}</td>
            <td>{row.Created_at}</td>
            <td>{row.Stock}</td>
            <td>
              <div className="flex gap-2 items-center justify-between max-w-fit">
                <Link href={`/dashboard/products/${row.Productid}`}>
                  <button className="bg-teal-600 hover:bg-teal-800 rounded-lg text-white px-2 py-1 text-sm border-0">
                    view
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="bg-red-600 hover:bg-red-800 rounded-lg text-white py-1 px-2 text-sm border-0">
                    delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
