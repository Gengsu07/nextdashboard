import Image from "next/image";

const ProductDetailPage = () => {
  const label = [
    {
      label: "Title",
      type: "text",
      name: "title",
      placeholder: "Iphone",
    },
    {
      label: "Description",
      type: "text",
      name: "description",
      placeholder: "Brand New Iphone 14",
    },
    {
      label: "Price",
      type: "number",
      name: "price",
      placeholder: "10.000",
    },
    {
      label: "Created at",
      type: "date",
      name: "Created",
      placeholder: "10-04-2023",
    },
    {
      label: "Stock",
      type: "number",
      name: "stock",
      placeholder: "100",
    },
  ];
  return (
    <div className="flex justify-between gap-5 w-full h-screen mt-5 max-sm:flex-col">
      <div className="flex flex-col w-[40%] bgSoft rounded-lg px-5 py-5 h-fit max-sm:mx-auto">
        <div className="rounded-lg w-fit mb-5 mx-auto my-auto">
          <Image
            src="/noproduct.jpg"
            alt="avatar"
            width={300}
            height={400}
            className="rounded-md object-cover border-2"
          />
        </div>
        <p>Iphone</p>
      </div>
      <div className="flex flex-col gap-5 bgSoft w-full px-5 py-5 rounded-lg">
        {label.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <label>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              className="bgCard px-3 py-3 borderTipis outline-none rounded-lg"
            />
          </div>
        ))}
        <label>Size</label>
        <textarea
          name="size"
          id="size"
          cols="30"
          rows="3"
          placeholder="size"
          className="w-full bgCard px-3 py-2  borderTipis outline-none rounded-lg"
        />

        <label>Cat</label>
        <select
          name="category"
          id="category"
          className="w-[45%] bgCard px-3 py-3  borderTipis outline-none bgSoft rounded-lg"
        >
          <option value={true} defaultValue={true}>
            Choose a Category
          </option>
          <option value="kitchen">Kitchen</option>
          <option value="computers">Computers</option>
        </select>

        <label>Description</label>
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="5"
          placeholder="desc"
          className="w-full bgCard px-3 py-2  borderTipis outline-none rounded-lg"
        />

        <button className="w-full px-7 py-3 text-white bg-teal-500 rounded-lg cursor-pointer border-none">
          Update
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
