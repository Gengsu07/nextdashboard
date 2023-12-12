import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col  justify-center items-center w-full h-screen">
      <div className="bgSoft w-[35%] h-[50%] rounded-lg flex flex-col justify-center gap-8 px-5 max-h-screen">
        <h1 className="text-center font-bold text-2xl">Login GengsuCorp</h1>
        <form className="flex flex-col gap-5 justify-center">
          <input
            type="text"
            placeholder="username"
            className="bgCard px-3 py-5  borderTipis outline-none bgSoft rounded-lg"
          />
          <input
            type="password"
            placeholder="password"
            className="bgCard px-3 py-5  borderTipis outline-none bgSoft rounded-lg"
          />
          <button className="w-full px-7 py-5 text-white bg-teal-500 rounded-lg cursor-pointer border-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
