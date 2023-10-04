import React from "react";

const page = () => {
  return (
    <div className="content-height flex items-center justify-center">
      <form className="flex flex-col">
        <input type="text" className="text-2xl mb-4 text-slate-800 px-0.5" />
        <button type="submit" className="text-md border border-white">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default page;
