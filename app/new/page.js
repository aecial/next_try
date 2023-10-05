"use client";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";

const page = () => {
  const prisma = new PrismaClient();
  async function addNote(e, note) {
    await prisma.notes.create({ data: { text: note } });
  }
  const [myText, setMyText] = useState("");
  return (
    <div className="content-height flex items-center justify-center">
      <div className="flex flex-col">
        <input
          type="text"
          className="text-2xl mb-4 text-slate-800 px-0.5"
          onChange={(e) => setMyText(e.target.value)}
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
