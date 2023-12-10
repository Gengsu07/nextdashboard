import Toolbar from "../../components/Toolbar";
import Pagination from "../../components/pagination";
import ProductTable from "./ProductTable";

const ProductsPage = () => {
  return (
    <div className="bgSoft flex flex-col gap-5 rounded-lg mt-5 w-full px-5 py-5">
      <Toolbar
        placeholder="Search for a product"
        dest="/dashboard/products/add"
      />
      <div className="w-full">
        <ProductTable />
      </div>
      <div className="w-full">
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsPage;
