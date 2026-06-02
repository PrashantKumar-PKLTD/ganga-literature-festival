import { useState } from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black antialiased selection:bg-[#b58b32] selection:text-white">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}
