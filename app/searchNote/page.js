"use client";
import { toast } from "sonner";
import React, { useState } from "react";
import NoteCard from "@/components/NoteCard";

const page = () => {
  const [noteId, setNoteId] = useState("");

  // search note to DB
  async function searchNote(noteId) {
    console.log(noteId);
    setNoteId("");
  }

  return (
    <div className="content-height flex items-center justify-center">
      <div className="flex flex-col">
        <input
          type="text"
          className="text-2xl mb-4 text-slate-800 px-0.5"
          value={noteId}
          onChange={(e) => setNoteId(e.target.value)}
          required
        />
        <button
          onClick={() => searchNote(noteId)}
          className="text-md border border-white"
        >
          Search Note
        </button>
      </div>
      {/* <NoteCard /> */}
    </div>
  );
};

export default page;
