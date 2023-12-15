import LoadingSpinner from "../spinner";

const SubmitButton = () => {
  return (
    <button className="w-full px-7 py-3 text-white bg-teal-500 hover:bg-teal-800 rounded-lg cursor-pointer border-none">
      Submit
    </button>
  );
};

const SubmitLoading = () => {
  return (
    <div>
      <LoadingSpinner />
      <button className="w-full px-7 py-3 text-white bg-teal-500 hover:bg-teal-800 rounded-lg cursor-pointer border-none">
        Submit
      </button>
    </div>
  );
};

export { SubmitButton, SubmitLoading };
