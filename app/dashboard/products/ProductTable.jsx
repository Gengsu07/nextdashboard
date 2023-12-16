import Image from "next/image";
import Link from "next/link";
import { handleDeleteProduct } from "../../lib/action";

const ProductTable = ({ data }) => {
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
        {data.map((row) => (
          <tr key={row.title}>
            <td className="flex gap-3 items-center">
              <div className="flex gap-2 items-center">
                <Image
                  src={row.img || "/noavatar.png"}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover border-2"
                />
              </div>
              {row.title}
            </td>
            <td>{row.description}</td>
            <td>{row.price}</td>
            <td>{row.createdat}</td>
            <td>{row.stock}</td>
            <td>
              <div className="flex gap-2 items-center justify-between max-w-fit">
                <Link href={`/dashboard/products/${row._id.valueOf()}`}>
                  <button className="bg-teal-600 hover:bg-teal-800 rounded-lg text-white px-2 py-1 text-sm border-0">
                    view
                  </button>
                </Link>

                <form action={handleDeleteProduct}>
                  <input type="hidden" name="id" value={row._id.valueOf()} />
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

export default ProductTable;
