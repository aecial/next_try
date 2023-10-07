import React from "react";
import prisma from "@/lib/Prisma";
async function getNote() {
  const notes = await prisma.notes.findMany();
  return (
    <div className="content-height p-8">
      <h1 className="text-3xl text-center mb-4">My Notes</h1>
      <table className=" mx-auto border border-white w-96 text-center">
        <tbody className="border border-white">
          <tr>
            <th className="border border-white">Id</th>
            <th className="border border-white">Text</th>
            <th className="border border-white">CreatedAt</th>
          </tr>
          {notes.map((note) => {
            return (
              <tr className="border border-white" key={note.id}>
                <td className="border border-white">{note.id}</td>
                <td className="border border-white">{note.text}</td>
                <td className="border border-white">
                  {note.createdAt.toString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default getNote;
