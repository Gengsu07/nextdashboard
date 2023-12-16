import Image from "next/image";
import { fetchProduct } from "../../../lib/data";
import { handleUpdateProduct } from "../../../lib/action";

const ProductDetailPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="flex justify-between gap-5 w-full h-screen mt-5 max-sm:flex-col">
      <div className="flex flex-col w-[40%] bgSoft rounded-lg px-5 py-5 h-fit max-sm:mx-auto">
        <div className="rounded-lg w-fit mb-5 mx-auto my-auto">
          <Image
            src={product.img || "/noproduct.jpg"}
            alt="avatar"
            width={300}
            height={400}
            className="rounded-md object-cover border-2"
          />
        </div>
        <p>{product.title}</p>
      </div>
      <form
        action={handleUpdateProduct}
        className="flex flex-col gap-5 bgSoft w-full px-5 py-5 rounded-lg "
      >
        <input type="hidden" name="id" value={product._id.valueOf()} />
        <div className="flex flex-col gap-1">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder={product.title}
            className="bgCard px-3 py-3 borderTipis outline-none rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder={product.price}
            className="bgCard px-3 py-3 borderTipis outline-none rounded-lg "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder={product.stock}
            className="bgCard px-3 py-3 borderTipis outline-none rounded-lg "
          />
        </div>
        <label>Color</label>
        <textarea
          name="color"
          id="color"
          type="text"
          placeholder={product.color}
          className="w-full bgCard px-3 py-2  borderTipis outline-none rounded-lg "
        />
        <label>Size</label>
        <textarea
          name="size"
          id="size"
          type="text"
          placeholder={product.size}
          className="w-full bgCard px-3 py-2  borderTipis outline-none rounded-lg "
        />
        <label>Category</label>
        <select
          name="category"
          id="category"
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none bgSoft rounded-lg "
        >
          <option value={true} defaultValue={true}>
            Choose a Category
          </option>
          <option value="kitchen">Kitchen</option>
          <option value="computers">Computers</option>
        </select>
        <label>Description</label>
        <textarea
          name="description"
          id="desc"
          placeholder={product.description}
          className="w-full bgCard px-3 py-2  borderTipis outline-none rounded-lg "
        />
        <button className="w-full px-7 py-3 text-white bg-teal-500 rounded-lg  cursor-pointer border-none">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProductDetailPage;
