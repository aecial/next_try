"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="flex items-center gap-2">
          <img
            src={session.user.image}
            width={35}
            height={35}
            className="rounded-2xl"
          />
          {session?.user?.name}
        </div>

        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/new">New</Link>
          <Link href="/getNote">View Notes</Link>
          <Link href="/cars">Cars</Link>
        </div>

        <button onClick={() => signOut()} className="border border-white p-1">
          Sign Out
        </button>
      </>
    );
  }
  return (
    <>
      Not Signed In <br />
      <button onClick={() => signIn()} className="border border-white p-1">
        Sign In
      </button>
    </>
  );
}
const Navbar = () => {
  return (
    <nav className=" h-14 flex items-center p-4 justify-between bg-slate-950">
      <AuthButton />
    </nav>
  );
};

export default Navbar;
