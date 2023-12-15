import LoadingSpinner from "../components/spinner";

const TestPage = () => {
  const handleForm = async (formData) => {
    "use server";
    console.log(formData.get("username"));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default TestPage;
