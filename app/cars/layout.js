import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function CarsLayout({ children }) {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/");
  } else {
    return (
      <>
        <div className="content-height">
          <h1>CARSSS!</h1>
          <div>{children}</div>
        </div>
      </>
    );
  }
}
