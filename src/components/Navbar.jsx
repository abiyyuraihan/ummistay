import { useState, useEffect } from "react";
import { BRAND, WA_NUMBER } from "../data/properties";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Kos-Kosan", href: "#kos" },
    { label: "Sewa Rumah", href: "#rumah" },
    { label: "Sewa Ruko", href: "#ruko" },
    { label: "Kontak", href: "#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div>
              <span
                className={`font-display font-bold text-lg leading-none block ${
                  scrolled ? "text-navy-700" : "text-white"
                }`}
              >
                Ummi
              </span>
              <span
                className={`text-xs font-body font-medium tracking-widest uppercase ${
                  scrolled ? "text-gold-500" : "text-gold-300"
                }`}
              >
                Stay
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-navy-500/10 ${
                  scrolled
                    ? "text-navy-700 hover:text-navy-500"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Halo%20Ummi%20Stay%2C%20saya%20ingin%20bertanya%20tentang%20properti%20yang%20tersedia.`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 gold-gradient text-white text-sm font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity"
            >
              📞 Hubungi Kami
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-navy-700" : "text-white"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/97 backdrop-blur-md border-t border-navy-100 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-navy-700 font-medium rounded-lg hover:bg-navy-50 hover:text-navy-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Halo%20Ummi%20Stay%2C%20saya%20ingin%20bertanya%20tentang%20properti%20yang%20tersedia.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-4 py-3 gold-gradient text-white font-semibold rounded-lg text-center shadow-md"
            >
              📞 Hubungi Kami via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
