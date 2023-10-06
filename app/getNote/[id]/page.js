import React from "react";
import prisma from "@/lib/Prisma";
const page = async ({ params }) => {
  const id = Number(params.id);
  try {
    const note = await prisma.notes.findUnique({
      where: {
        id: id,
      },
    });
    return (
      <div className="content-height p-8">
        {note.id} | {note.text} | {note.createdAt.toString()}
      </div>
    );
  } catch {
    return (
      <div className="content-height p-8 flex justify-center items-center">
        <h1 className="text-4xl">Note not found :/</h1>
      </div>
    );
  }
};

export default page;
