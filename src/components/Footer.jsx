import { Link } from "react-router-dom";
import { MadhubaniBorderBand, MadhubaniWatermark } from "./MadhubaniMotifs";

const footerLogos = [
  { label: "Presented By", image: "/bihaan-logo.png", alt: "BIHAAN" },
  { label: "Initiative", image: "/icon12.png", alt: "Let's Inspire Bihar" },
  { label: "Publishing Partner", image: "/bluone-logo.webp", alt: "BluOne Ink" },
  { label: "Cultural Partner", image: "/spicmacay-logo.svg", alt: "SPIC MACAY" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/prashantkumarltd",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter/X",
    href: "https://x.com/RtnPrashant?t=Y6zUsZvyrCyDmi6qClqczQ&s=09",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/prashantkumarltd",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.297c-.875.875-2.026 1.365-3.323 1.365s-2.448-.49-3.323-1.365c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/prashantkumarltd/?originalSubdomain=uk",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark text-cream border-t border-cream/10 overflow-hidden">
      <MadhubaniBorderBand className="absolute top-0 left-0 w-full opacity-50 pointer-events-none" color="#C8962B" />
      <MadhubaniWatermark className="absolute -right-20 -bottom-20 opacity-[0.04] hidden sm:flex" opacity={0.04} size={500} />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-saffron">
              Ganga Literature Festival
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl font-medium uppercase leading-none text-cream md:text-7xl">
              Stories By The River.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-cream/70 text-sm md:text-base font-semibold">
              A refined festival website for authors, readers, students,
              publishers, partners, and cultural communities.
            </p>
          </div>

          <div className="grid w-full max-w-xl grid-cols-2 gap-4 sm:grid-cols-4 md:justify-self-end">
            {footerLogos.map((logo) => (
              <div key={logo.alt}>
                <p className="mb-3 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.18em] text-saffron">
                  {logo.label}
                </p>
                <div className="flex h-24 items-center justify-center border border-antiquegold/30 bg-ivory p-3 shadow-md rounded-2xl transition duration-300 hover:scale-105 hover:shadow-editorial">
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-ivory/10 pt-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-terracotta">Festival</p>
            <ul className="space-y-3 text-sm font-bold text-ivory/70">
              <li><Link to="/festival/register-to-attend" className="hover:text-terracotta transition">Register to Attend</Link></li>
              <li><Link to="/festival/friend-of-the-festival" className="hover:text-terracotta transition">Friend of the Festival</Link></li>
              <li><Link to="/festival/book-your-festival-hotel" className="hover:text-terracotta transition">Festival Hotels</Link></li>
              <li><Link to="/festival/speakers" className="hover:text-terracotta transition">Speakers</Link></li>
              <li><Link to="/honourable-guests" className="hover:text-terracotta transition">Honourable Guests</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-terracotta">Programme & Media</p>
            <ul className="space-y-3 text-sm font-bold text-ivory/70">
              <li><Link to="/programme" className="hover:text-terracotta transition">Programme Schedule</Link></li>
              <li><Link to="/media/blogs" className="hover:text-terracotta transition">Blogs</Link></li>
              <li><Link to="/partners" className="hover:text-terracotta transition">Sponsors & Partners</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-terracotta">About</p>
            <ul className="space-y-3 text-sm font-bold text-ivory/70">
              <li><Link to="/about" className="hover:text-terracotta transition">About the Festival</Link></li>
              <li><Link to="/about/contact-us" className="hover:text-terracotta transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-terracotta">Connect with Us</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 bg-charcoal text-antiquegold hover:bg-terracotta hover:text-ivory hover:border-terracotta transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs uppercase tracking-[0.18em] text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ganga Literature Festival</p>
          <p>Patna, Bihar</p>
        </div>
      </div>
    </footer>
  );
}
