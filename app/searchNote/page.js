"use client";
import { toast } from "sonner";
import React, { useState } from "react";
import NoteCard from "@/components/NoteCard";
import { stringify } from "postcss";

const page = () => {
  const [noteId, setNoteId] = useState("");
  const [validId, setValidId] = useState("id");
  const [validText, setValidText] = useState("text");
  const [validDate, setValidDate] = useState("date");

  // search note to DB
  async function searchNote(noteId) {
    console.log(noteId);
    const noteData = await fetch(`api/note/${noteId}`);
    const info = await noteData.json();
    setValidId(info["data"]["id"]);
    setValidText(info["data"]["text"]);
    setValidDate(info["data"]["createdAt"].toString());
    setNoteId("");
    // setValidId(data.data.id);
    // setValidText(data.data.text);
    // setValidDate(data.data.createdAt);
  }

  return (
    <div className="content-height flex flex-col-reverse">
      <div className="flex flex-col w-44 h-44 mx-auto">
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
      <NoteCard id={validId} text={validText} date={validDate} />
    </div>
  );
};

export default page;
