import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
export default async function searchNoteLayout({ children }) {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/");
  } else {
    return (
      <>
        <div className="content-height">
          <div>
            {children}
            <Toaster position="top-right" />
          </div>
        </div>
      </>
    );
  }
}
