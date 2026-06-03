import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

export default function FAQPage() {
  return (
    <div className="bg-glf-cream min-h-screen font-sans antialiased selection:bg-glf-burgundy/20 selection:text-glf-burgundy flex flex-col">
      <Navbar />
      
      {/* Page Content */}
      <main className="flex-1 pt-10">
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
