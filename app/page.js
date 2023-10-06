//"use client";
import prisma from "../lib/Prisma";

export default async function Home() {
  const notes = await prisma.notes.findMany();

  return (
    <>
      <div className="content-height p-4">
        <div className="container mx-auto flex flex-col gap-2">
          <h1 className="text-2xl text-center text-slate-200">Main Content</h1>
          <div>
            <h2 className="text-xl mb-4 text-center">My Notes</h2>
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
        </div>
      </div>
    </>
  );
}
