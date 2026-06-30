import { BRAND, WA_NUMBER } from "../data/properties";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="navy-gradient text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-none">Ummi</div>
                <div className="text-gold-300 text-xs font-body tracking-widest uppercase">Stay</div>
              </div>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-5">
              {BRAND.subtagline}. Melayani area Jakarta, Tangerang, dan Bekasi.
            </p>
            {/* WA CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Halo%20Ummi%20Stay%2C%20saya%20ingin%20bertanya%20tentang%20properti%20yang%20tersedia.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 gold-gradient rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity font-body shadow-md"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat WhatsApp
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-gold-300">Properti Kami</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { href: "#kos", label: "Kos-Kosan" },
                { href: "#rumah", label: "Sewa Rumah" },
                { href: "#ruko", label: "Sewa Ruko" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-gold-300 transition-colors flex items-center gap-2">
                    <span className="text-gold-500/50">→</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Area */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-gold-300">Area Layanan</h4>
            <ul className="space-y-2 font-body text-sm text-white/60">
              {[
                "Jakarta Barat",
                "Tangerang",
                "Bekasi Timur",
              ].map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-display text-sm font-bold mb-3 text-gold-300">Sosial Media</h4>
              <ul className="space-y-2 font-body text-sm text-white/60 mb-6">
                <li className="flex items-center gap-2">Instagram: @ummi.stay</li>
                <li className="flex items-center gap-2">Facebook: Ummi Stayy</li>
                <li className="flex items-center gap-2">TikTok: ummi.stay</li>
              </ul>
              
              <h4 className="font-display text-sm font-bold mb-3 text-gold-300">Kontak</h4>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-sm font-body transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WA Business
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs font-body">
            © {year} Ummi Stay. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Powered by Ummi Stay
          </p>
        </div>
      </div>
    </footer>
  );
}
