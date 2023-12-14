import Toolbar from "../../components/Toolbar";
import Pagination from "../../components/pagination";
import ProductTable from "./ProductTable";
import { searchParams } from "next/navigation";
import { fetchProduct } from "../../lib/data";

const ProductsPage = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const q = searchParams?.q || "";
  const { countProducts, products } = await fetchProduct(q, page);

  return (
    <div className="bgSoft flex flex-col gap-5 rounded-lg mt-5 w-full px-5 py-5">
      <Toolbar
        placeholder="Search for a product"
        dest="/dashboard/products/add"
      />
      <div className="w-full">
        <ProductTable data={products} />
      </div>
      <div className="w-full">
        <Pagination count={countProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
