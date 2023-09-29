import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[100vh]">
      <h1 className="text-4xl ">LOGIN</h1>
      <input type="text" className="text-black" autoComplete="off" />
      <input type="password" className="text-black" />
      <button className="border border-slate-300 p-2 w-44 hover:bg-slate-600 focus-within:bg-slate-600">
        SUBMIT
      </button>
    </div>
  );
};

export default page;
