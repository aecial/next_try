import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" h-14 flex items-center p-4 bg-slate-950">
      <Link
        href="/new"
        className="border border-slate-300 hover:bg-slate-700 focus-within:bg-slate-700 rounded p-2"
      >
        New
      </Link>
    </nav>
  );
};

export default Navbar;
