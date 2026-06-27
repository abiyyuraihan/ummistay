import { WA_NUMBER, BRAND } from "../data/properties";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 navy-gradient" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-navy-500/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-500/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/40 bg-gold-500/10 text-gold-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-gold-300 animate-pulse" />
          Properti Pilihan · Jabodetabek
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Hunian &amp; Ruang Usaha
          <br />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #C9A84C, #F0C040, #C9A84C)" }}>
              Terpercaya
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M0 10 Q75 0 150 6 Q225 12 300 4" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        {/* Sub */}
        <p className="font-body text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Kos-kosan, sewa rumah, dan sewa ruko di lokasi strategis Jakarta, Tangerang &amp; Bekasi. Harga terjangkau, fasilitas lengkap, proses mudah.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { num: "3", label: "Kos-Kosan" },
            { num: "1", label: "Rumah Sewa" },
            { num: "1", label: "Ruko Sewa" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-gold-300">{s.num}</div>
              <div className="text-white/60 text-sm font-body mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kos"
            className="px-8 py-4 navy-gradient border border-gold-500/30 text-white font-semibold rounded-xl hover:border-gold-500/60 transition-all duration-200 shadow-lg font-body"
          >
            🏠 Lihat Properti
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Halo%20Antigravity%20Property%2C%20saya%20ingin%20bertanya%20tentang%20properti%20yang%20tersedia.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 gold-gradient text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-opacity font-body"
          >
            💬 Hubungi via WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
