import { useState } from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop";
import ConnectWithUs from "./ConnectWithUs";
import FloatingSocialRail from "./FloatingSocialRail";
import Footer from "./Footer";
import JoinUsModal from "./JoinUsModal";
import Navbar from "./Navbar";

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black antialiased selection:bg-[#b58b32] selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#b58b32] focus:text-white focus:px-4 focus:py-2 focus:font-bold focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b58b32]"
      >
        Skip to main content
      </a>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main-content" tabIndex="-1" className="outline-none">
        <Outlet />
      </main>
      <ConnectWithUs />
      <Footer />
      <FloatingSocialRail />
      <BackToTop />
      <JoinUsModal />
    </div>
  );
}
