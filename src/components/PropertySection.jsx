import PropertyCard from "./PropertyCard";

const SECTION_CONFIG = {
  kos: {
    id: "kos",
    icon: "🏠",
    label: "Kos-Kosan",
    title: "Kos-Kosan",
    subtitle: "Hunian nyaman dengan harga terjangkau untuk mahasiswa dan pekerja",
    bgClass: "bg-white",
  },
  rumah: {
    id: "rumah",
    icon: "🏡",
    label: "Sewa Rumah",
    title: "Sewa Rumah",
    subtitle: "Rumah cluster dan perumahan eksklusif untuk keluarga",
    bgClass: "bg-slate-50",
  },
  ruko: {
    id: "ruko",
    icon: "🏢",
    label: "Sewa Ruko",
    title: "Sewa Ruko",
    subtitle: "Ruang usaha strategis untuk mendukung bisnis Anda",
    bgClass: "bg-white",
  },
};

export default function PropertySection({ type, properties }) {
  const cfg = SECTION_CONFIG[type];
  if (!properties?.length) return null;

  return (
    <section id={cfg.id} className={`py-16 md:py-24 ${cfg.bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4 font-body">
            <span>{cfg.icon}</span>
            <span>{cfg.label}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            {cfg.title}
          </h2>
          <div className="w-16 h-1 gold-gradient rounded-full mx-auto mb-4" />
          <p className="text-navy-500 font-body text-lg max-w-xl mx-auto">{cfg.subtitle}</p>
        </div>

        {/* Cards grid */}
        <div className={`grid gap-6 ${
          properties.length === 1
            ? "grid-cols-1 max-w-md mx-auto"
            : properties.length === 2
            ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}>
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
