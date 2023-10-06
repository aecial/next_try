"use client";
import { toast } from "sonner";
import React, { useState } from "react";

const page = () => {
  const [myText, setMyText] = useState("");

  // Add note to DB
  async function addNote(note) {
    console.log(note);
    try {
      fetch("/api/addNote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ note }),
      });
      toast.success("Added a new note", {
        style: { backgroundColor: "#065F46", color: "white" },
      });
    } catch (error) {
      toast.error(error);
    }
    setMyText("");
  }

  return (
    <div className="content-height flex items-center justify-center">
      <div className="flex flex-col">
        <input
          type="text"
          className="text-2xl mb-4 text-slate-800 px-0.5"
          value={myText}
          onChange={(e) => setMyText(e.target.value)}
          required
        />
        <button
          onClick={() => addNote(myText)}
          className="text-md border border-white"
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default page;
