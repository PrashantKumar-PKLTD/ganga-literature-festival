import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { ChevronLeft, ChevronRight, X, Sparkles, Image as ImageIcon, Feather, Waves } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ["All", "Ghats & River", "Literary Dialogues", "Sacred Aarti", "Books & Ink"];

// Updated with reliable, high-resolution Unsplash imagery tailored to the themes
const GALLERY_ITEMS = [
  // Ghats & River
  {
    id: 1,
    src: "/Images/gallery/gallery-1.jpg",
    alt: "Varanasi Ghats at Dawn",
    category: "Ghats & River",
    desc: "The serene morning atmosphere by the holy river, inspiring poets and authors alike."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=1200&q=80&auto=format&fit=crop",
    alt: "Boats on the Ganges",
    category: "Ghats & River",
    desc: "Traditional wooden boats gently navigating the spiritual waters of the eternal river."
  },
  
  // Literary Dialogues
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1200&q=80&auto=format&fit=crop",
    alt: "Gyan Bhawan Main Hall",
    category: "Literary Dialogues",
    desc: "A packed auditorium at Gyan Bhawan as keynote speakers take the stage."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&q=80&auto=format&fit=crop",
    alt: "Panel Discussions",
    category: "Literary Dialogues",
    desc: "Eminent scholars debating the intersection of ancient scriptures and modern vernacular."
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop",
    alt: "Interactive Workshops",
    category: "Literary Dialogues",
    desc: "Hands-on sessions where young writers explore local histories and plot points."
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80&auto=format&fit=crop",
    alt: "Keynote Addresses",
    category: "Literary Dialogues",
    desc: "Renowned authors sharing their perspectives on India's evolving literary landscape."
  },

  // Sacred Aarti
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1663004554834-8c8f000bc1a3?w=1200&q=80&auto=format&fit=crop",
    alt: "Ganga Aarti Ceremonies",
    category: "Sacred Aarti",
    desc: "The spectacular evening Aarti, a celebration of light, spirituality, and culture."
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1618751859847-a859c2b4c1bf?w=1200&q=80&auto=format&fit=crop",
    alt: "Floating Oil Lamps",
    category: "Sacred Aarti",
    desc: "Golden diyas floating on the river, carrying prayers and poetic wishes downstream."
  },

  // Books & Ink
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop",
    alt: "Festival Book Display",
    category: "Books & Ink",
    desc: "A rich collection of classical literature and new publications featured at the stalls."
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80&auto=format&fit=crop",
    alt: "Literary Research & Reading",
    category: "Books & Ink",
    desc: "Open pages of literature inviting delegates to immerse themselves in storytelling."
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80&auto=format&fit=crop",
    alt: "Historical Manuscripts Exhibit",
    category: "Books & Ink",
    desc: "Ancient scripts and bound documents preserved and displayed for heritage researchers."
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=1200&q=80&auto=format&fit=crop",
    alt: "Poetry Notes & Diaries",
    category: "Books & Ink",
    desc: "Original draft sheets and handwritten notes from participating authors."
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const pageRef = useRef(null);
  const gridRef = useRef(null);

  const filteredItems = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  useGSAP(() => {
    gsap.fromTo(
      ".gallery-hero-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.2 }
    );

    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.fromTo(
        gridRef.current.children,
        { scale: 0.9, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          overwrite: "auto"
        }
      );
    }
  }, { scope: pageRef, dependencies: [activeCategory] });

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden"; 
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = ""; 
  };

  const navigateLightbox = (direction) => {
    if (lightboxIndex === null) return;
    const newIndex = (lightboxIndex + direction + filteredItems.length) % filteredItems.length;
    setLightboxIndex(newIndex);
  };

  return (
    <div ref={pageRef} className="bg-[#fcf5f1] min-h-screen flex flex-col font-sans antialiased text-slate-800 relative overflow-hidden">
      <Navbar />

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-30px) rotate(18deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-25px) rotate(-8deg); }
        }
        @keyframes zoom-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 14s ease-in-out infinite 2s; }
        .animate-zoom-in { animation: zoom-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
      `}</style>

      <div className="absolute top-[25%] left-[-3%] text-[#6b2a5c]/5 pointer-events-none animate-float-slow">
        <Feather className="w-80 h-80" strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-[15%] right-[-4%] text-[#23356e]/5 pointer-events-none animate-float-delayed">
        <Waves className="w-96 h-96" strokeWidth={0.5} />
      </div>

      <main className="flex-grow">
        {/* ── Page Hero ── */}
        <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-[#6b2a5c] via-[#5c234f] to-[#fcf5f1] text-white text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
              <path d="M0,120 C400,60 800,200 1200,100 L1440,150 L1440,300 L0,300 Z" fill="#ffffff" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto relative z-10 gallery-hero-content">
            
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-md">
              Captured <span className="text-amber-400">Moments</span>
            </h1>
            
            <p className="text-pink-100/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Explore a visual gallery showcasing historical literature, sacred ceremonies, and inspiring dialogues held at the Ganga Literature Festival.
            </p>
          </div>
        </section>

        {/* ── Gallery Grid & Filter Section ── */}
        <section className="max-w-[90rem] mx-auto w-full px-6 md:px-12 py-16 relative z-10 flex-grow">
          
          {/* Category Filter Tabs */}
          <div className="gallery-hero-content flex flex-wrap justify-center items-center gap-3 mb-16">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    active
                      ? "bg-[#6b2a5c] border-[#6b2a5c] text-white shadow-lg scale-105"
                      : "bg-white/80 backdrop-blur-sm border-slate-200 text-slate-600 hover:text-[#6b2a5c] hover:border-[#6b2a5c]/50 hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Consistent Grid Layout */}
          {filteredItems.length > 0 ? (
            <div 
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className="group relative w-full aspect-[4/5] bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-slate-200/50"
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091524] via-[#091524]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-left">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#091524] bg-amber-400 px-3 py-1 rounded-sm w-fit mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-md">
                      {item.category}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {item.alt}
                    </h3>
                    
                    {/* Slide up description */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                      <p className="text-sm text-slate-200 font-light leading-relaxed overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white/50 backdrop-blur-sm rounded-3xl border border-dashed border-slate-300">
              <ImageIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-lg text-slate-500 font-medium">No images found in this category.</p>
            </div>
          )}
        </section>
      </main>

      {/* ── Fullscreen Lightbox Modal ── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-slate-950/95 backdrop-blur-xl text-white select-none animate-fade-in">
          
          <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/10 bg-black/20 relative z-[110]">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Ganga Literature Festival
              </span>
              <h4 className="text-sm text-slate-400 font-light mt-1">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </h4>
            </div>
            
            <button
              onClick={closeLightbox}
              className="p-3 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors duration-200"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex-grow flex items-center justify-between px-4 md:px-12 relative">
            <button
              onClick={() => navigateLightbox(-1)}
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:scale-110 transition-all duration-200 relative z-[110] backdrop-blur-md"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="max-w-6xl max-h-[75vh] w-full flex items-center justify-center p-4 relative z-[105] mx-auto animate-zoom-in">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                className="max-w-full max-h-[75vh] rounded-xl shadow-2xl border border-white/10 object-contain"
              />
            </div>

            <button
              onClick={() => navigateLightbox(1)}
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:scale-110 transition-all duration-200 relative z-[110] backdrop-blur-md"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="bg-black/40 border-t border-white/10 p-8 text-center relative z-[110]">
            <span className="text-xs uppercase tracking-widest text-[#091524] bg-amber-400 font-extrabold px-3 py-1 rounded-sm">
              {filteredItems[lightboxIndex].category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 font-heading">
              {filteredItems[lightboxIndex].alt}
            </h3>
            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              {filteredItems[lightboxIndex].desc}
            </p>
          </div>
        </div>
      )}

      <Footer />
      <BackToTop />
    </div>
  );
}