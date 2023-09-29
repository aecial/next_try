import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="content-height p-4">
        <div className="container mx-auto bg-slate-500 flex flex-col gap-2">
          <h1 className="text-2xl text-center text-slate-200">Main Content</h1>
          <div>
            <h2 className="text-xl mb-4">Wazzup</h2>
            <Link href={"/login"} className="bg-white text-black p-2">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
