import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" h-14 flex items-center p-4 justify-between bg-slate-950">
      <Link
        href="/homepage/new"
        className="border border-slate-300 hover:bg-slate-700 focus-within:bg-slate-700 rounded p-2"
      >
        New
      </Link>
      <Link
        href="/login"
        className="border border-slate-300 hover:bg-slate-700 focus-within:bg-slate-700 rounded p-2"
      >
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
