import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function NewLayout({ children }) {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/");
  } else {
    return (
      <>
        <div className="content-height">
          <div>{children}</div>
        </div>
      </>
    );
  }
}
