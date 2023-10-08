import React from "react";
import prisma from "@/lib/Prisma";
import NoteCard from "@/components/NoteCard";
const page = async ({ params }) => {
  const id = Number(params.id);
  try {
    const note = await prisma.notes.findUnique({
      where: {
        id: id,
      },
    });
    return <NoteCard id={note.id} text={note.text} date={note.createdAt} />;
  } catch {
    return (
      <div className="content-height p-8 flex justify-center items-center">
        <h1 className="text-4xl">Note not found :/</h1>
      </div>
    );
  }
};

export default page;
