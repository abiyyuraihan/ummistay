import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PropertySection from "./components/PropertySection";
import Footer from "./components/Footer";
import { properties, WA_NUMBER } from "./data/properties";

const FILTERS = [
  { key: "semua", label: "Semua Properti", icon: "🏙️" },
  { key: "kos", label: "Kos-Kosan", icon: "🏠" },
  { key: "rumah", label: "Sewa Rumah", icon: "🏡" },
  { key: "ruko", label: "Sewa Ruko", icon: "🏢" },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("semua");

  const kosProps = properties.filter((p) => p.type === "kos");
  const rumahProps = properties.filter((p) => p.type === "rumah");
  const rukoProps = properties.filter((p) => p.type === "ruko");

  const showKos = activeFilter === "semua" || activeFilter === "kos";
  const showRumah = activeFilter === "semua" || activeFilter === "rumah";
  const showRuko = activeFilter === "semua" || activeFilter === "ruko";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Filter Bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 font-body ${
                  activeFilter === f.key
                    ? "gold-gradient text-white shadow-md"
                    : "bg-navy-50 text-navy-700 hover:bg-navy-100"
                }`}
              >
                <span>{f.icon}</span>
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {showKos && <PropertySection type="kos" properties={kosProps} />}
      {showRumah && <PropertySection type="rumah" properties={rumahProps} />}
      {showRuko && <PropertySection type="ruko" properties={rukoProps} />}

      {/* Floating WA button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=Halo%20Antigravity%20Property%2C%20saya%20ingin%20bertanya%20tentang%20properti%20yang%20tersedia.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-4 pr-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-200 hover:scale-105 font-body font-semibold text-sm"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <Footer />
    </div>
  );
}
