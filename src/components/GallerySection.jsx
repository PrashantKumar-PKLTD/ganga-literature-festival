import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    title: 'Literary Inspirations',
    category: 'Literature',
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    title: 'Eminent Keynotes',
    category: 'Sessions',
  },
  {
    src: 'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?auto=format&fit=crop&q=80&w=800',
    title: 'Ganga Ghat at Dusk',
    category: 'Venue',
  },
  {
    src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
    title: 'Ancient Archives & Manuscripts',
    category: 'Exhibition',
  },
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    title: 'Main Summit Stage',
    category: 'Sessions',
  },
  {
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    title: 'Scholarly Readings',
    category: 'Literature',
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Close lightbox on escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleOpen = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const handleClose = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset'; // Unlock background scroll
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-20 bg-neutral-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
          <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            Media Highlights
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 mt-4 tracking-tight">
            Glimpses of Cultural Heritage
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-5 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
            A visual retrospect of literary dialogues, serene sunset recitals on the banks of Ganga, and active research symposiums from past assemblies.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl border border-gray-100 bg-white transition-all duration-300 reveal-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleOpen(index)}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-between items-end text-white">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-secondary text-primary text-xs font-bold font-sans tracking-wide uppercase mb-2">
                    {img.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display leading-tight">
                    {img.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
          
          {/* Top Close Bar */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-200 focus:outline-none z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-200 focus:outline-none z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Core Content Layer */}
          <div className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center z-10 select-none">
            <img
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10 animate-fade-in"
            />
            
            {/* Meta tags at bottom */}
            <div className="text-center mt-6 text-white max-w-2xl px-4 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-extrabold uppercase mb-2">
                {GALLERY_IMAGES[lightboxIndex].category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display leading-tight">
                {GALLERY_IMAGES[lightboxIndex].title}
              </h3>
            </div>
          </div>

          {/* Right Navigation */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-200 focus:outline-none z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
        </div>
      )}
    </section>
  );
}
