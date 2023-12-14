const TestPage = () => {
  const handleForm = async (formData) => {
    "use server";
    console.log(formData.get("username"));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center justify-center"
        action={handleForm}
      >
        <input
          name="username"
          type="text"
          placeholder="isi"
          className="text-slate-500"
        />
        <button type="submit">Submit</button>
      </form>
      <p className="text-white"></p>
    </div>
  );
};

export default TestPage;
