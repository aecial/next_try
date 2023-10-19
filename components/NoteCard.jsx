"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

const NoteCard = ({ id, text, date }) => {
  const [show, setShow] = useState(false);
  const [newTxt, setNewTxt] = useState(text);
  function del(num) {
    fetch("/api/deleteNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num }),
    });
    history.back();
  }
  function upd(num, msg) {
    fetch("/api/updateNote", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num, msg }),
    });
    history.back();
  }
  return (
    <div className="content-height p-8 flex flex-col justify-center items-center gap-5">
      <div className="border border-white flex flex-col p-4 min-w-[20vw]">
        <h3 className="text-xl ">
          ID: <span className="underline">{id}</span>
        </h3>
        <h1 className="text-2xl text-center">{text}</h1>
        <h5 className="text-sm text-gray-400 text-center">{date.toString()}</h5>
      </div>
      <div className="flex justify-between min-w-[20vw]">
        <button
          className="border border-white p-2 w-32 hover:bg-slate-700"
          onClick={() => del(id)}
        >
          Delete
        </button>
        <button
          className="border border-white p-2 w-32 bg-slate-100 hover:bg-slate-300 focus-within:bg-slate-300  text-slate-800"
          onClick={() => setShow(!show)}
        >
          Update
        </button>
      </div>
      <div>
        {show ? (
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="newText"
              id="newText"
              value={newTxt}
              className="text-slate-800 px-1"
              onChange={(e) => setNewTxt(e.target.value)}
            />
            <div className="flex gap-5">
              <button
                className="border border-white p-2 w-32 bg-slate-100 hover:bg-slate-300 focus-within:bg-slate-300  text-slate-800"
                onClick={() => setShow(!show)}
              >
                Cancel
              </button>
              <button
                className="border border-white p-2 w-32 bg-slate-100 hover:bg-slate-300 focus-within:bg-slate-300  text-slate-800"
                onClick={() => upd(id, newTxt)}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NoteCard;
