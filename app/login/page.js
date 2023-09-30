import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[100vh]">
      <div className="flex flex-col gap-4 justify-center items-center bg-slate-700 rounded-md p-20">
        <h1 className="text-4xl text-slate-100 ">LOGIN</h1>
        <input type="text" className="text-black px-1" autoComplete="off" />
        <input type="password" className="text-black  px-1" />
        <button className="rounded-2xl bg-slate-300 text-slate-800  p-2 w-48 hover:bg-slate-400 hover:text-slate-100 focus-within:bg-slate-400 focus-within:text-slate-100 ">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default page;
