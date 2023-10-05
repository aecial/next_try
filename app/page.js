// "use client";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const notes = await prisma.notes.findMany();

  return (
    <>
      <div className="content-height p-4">
        <div className="container mx-auto bg-slate-500 flex flex-col gap-2">
          <h1 className="text-2xl text-center text-slate-200">Main Content</h1>
          <div>
            <h2 className="text-xl mb-4">Wazzup</h2>
            <table className=" mx-auto border border-white  w-auto text-center">
              <th>Id</th>
              <th>Text</th>
              <th>CreatedAt</th>
              <tbody className="">
                {notes.map((note) => {
                  return (
                    <tr>
                      <td>{note.id}</td>
                      <td>{note.text}</td>
                      <td>{note.createdAt.toString()}</td>
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
