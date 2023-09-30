import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
export default async function HomePageLayout({ children }) {
  const session = await getServerSession();
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        {children}
        <Footer />
      </SessionProvider>
    </>
  );
}
