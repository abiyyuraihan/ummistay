import { useState } from "react";
import { WA_NUMBER } from "../data/properties";

// Placeholder image as SVG data URL
const PLACEHOLDER = {
  kos: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect fill='%231E3A5F' width='800' height='500'/><rect fill='%232563EB' x='150' y='120' width='500' height='280' rx='8'/><rect fill='%231E3A5F' x='200' y='170' width='120' height='100' rx='4'/><rect fill='%231E3A5F' x='480' y='170' width='120' height='100' rx='4'/><rect fill='%231E3A5F' x='320' y='280' width='80' height='120'/><polygon fill='%23C9A84C' points='100,120 400,40 700,120'/><text x='400' y='460' text-anchor='middle' fill='white' font-size='22' font-family='sans-serif' opacity='0.5'>Foto Kos</text></svg>`,
  rumah: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect fill='%230F2038' width='800' height='500'/><rect fill='%231E3A5F' x='100' y='200' width='600' height='250' rx='6'/><polygon fill='%23C9A84C' points='50,200 400,60 750,200'/><rect fill='%23F0C040' x='330' y='300' width='140' height='150'/><rect fill='%232563EB' x='150' y='240' width='120' height='100' rx='4'/><rect fill='%232563EB' x='530' y='240' width='120' height='100' rx='4'/><text x='400' y='470' text-anchor='middle' fill='white' font-size='22' font-family='sans-serif' opacity='0.5'>Foto Rumah</text></svg>`,
  ruko: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect fill='%230F2038' width='800' height='500'/><rect fill='%231E3A5F' x='150' y='80' width='500' height='370' rx='4'/><rect fill='%232563EB' x='150' y='80' width='500' height='40'/><rect fill='%23C9A84C' x='150' y='260' width='500' height='4'/><rect fill='%23F8FAFC' x='200' y='120' width='140' height='120' rx='2'/><rect fill='%23F8FAFC' x='460' y='120' width='140' height='120' rx='2'/><rect fill='%23F8FAFC' x='200' y='280' width='140' height='120' rx='2'/><rect fill='%23F8FAFC' x='460' y='280' width='140' height='120' rx='2'/><rect fill='%23C9A84C' x='330' y='310' width='140' height='140'/><text x='400' y='470' text-anchor='middle' fill='white' font-size='22' font-family='sans-serif' opacity='0.5'>Foto Ruko</text></svg>`,
};

function formatHarga(harga, periode) {
  return `Rp ${harga.toLocaleString("id-ID")} / ${periode}`;
}

export default function PropertyCard({ property }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [imgError, setImgError] = useState(false);

  const { type, name, location, description, harga, periodeSewa, status, fasilitas, images, waMessage } = property;

  const displayImg = imgError || !images?.length ? PLACEHOLDER[type] : images[imgIdx];

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  const typeLabel = { kos: "Kos-Kosan", rumah: "Sewa Rumah", ruko: "Sewa Ruko" }[type];
  const typeColor = { kos: "bg-navy-100 text-navy-700", rumah: "bg-blue-100 text-blue-700", ruko: "bg-indigo-100 text-indigo-700" }[type];

  const tersedia = status === "tersedia";

  return (
    <div className={`bg-white rounded-2xl overflow-hidden card-shadow border border-navy-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col ${!tersedia ? "opacity-75" : ""}`}>
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
        <img
          src={displayImg}
          alt={name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Image nav dots */}
        {images?.length > 1 && !imgError && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === imgIdx ? "bg-white scale-125" : "bg-white/50"}`}
              />
            ))}
          </div>
        )}

        {/* Arrows */}
        {images?.length > 1 && !imgError && (
          <>
            <button onClick={() => setImgIdx((imgIdx - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors">
              ‹
            </button>
            <button onClick={() => setImgIdx((imgIdx + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors">
              ›
            </button>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full font-body ${typeColor}`}>
            {typeLabel}
          </span>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full font-body ${tersedia ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {tersedia ? "✓ Tersedia" : "✗ Terisi"}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-navy-900 mb-1 leading-tight">{name}</h3>

        <div className="flex items-start gap-1.5 text-sm text-navy-500 mb-3 font-body">
          <svg className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span className="leading-snug">{location}</span>
        </div>

        <p className="text-sm text-navy-600 font-body leading-relaxed mb-4 flex-1">{description}</p>

        {/* Fasilitas */}
        {fasilitas?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {fasilitas.map((f) => (
              <span key={f} className="px-2.5 py-1 bg-navy-50 text-navy-700 text-xs font-medium rounded-lg font-body">
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mb-4 pt-3 border-t border-navy-50">
          <div>
            <div className="text-xs text-navy-400 font-body mb-0.5">Harga Sewa</div>
            <div className="font-display text-xl font-bold text-navy-800">
              Rp {harga.toLocaleString("id-ID")}
            </div>
            <div className="text-xs text-gold-500 font-body font-medium">per {periodeSewa}</div>
          </div>
          {!tersedia && (
            <div className="text-right">
              <span className="text-xs text-red-500 font-body font-medium bg-red-50 px-3 py-1.5 rounded-lg">
                Sedang Terisi
              </span>
            </div>
          )}
        </div>

        {/* WA Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 font-body ${
            tersedia
              ? "gold-gradient text-white shadow-md hover:opacity-90 hover:shadow-lg"
              : "bg-gray-100 text-gray-500 cursor-pointer hover:bg-gray-200"
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {tersedia ? "Hubungi via WhatsApp" : "Tanya Ketersediaan"}
        </a>
      </div>
    </div>
  );
}
