import type { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Background from "../../Background/index";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Background />
  
      <Navbar />
  
      <main className="relative z-10">
        {children}
      </main>
  
      <Footer />
    </>
  );
}

export default Layout;