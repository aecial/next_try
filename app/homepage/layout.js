import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePageLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
