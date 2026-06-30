// ============================================================
//  ⭐ FILE INI ADALAH SATU-SATUNYA FILE YANG PERLU DIEDIT
//     untuk menambah, mengubah, atau menghapus properti.
// ============================================================

// ─── NOMOR WHATSAPP BUSINESS ────────────────────────────────
// Format internasional tanpa + (contoh: 6281234567890)
export const WA_NUMBER = "6281234567890";

// ─── INFO BRAND ─────────────────────────────────────────────
export const BRAND = {
  name: "Ummi Stay",
  tagline: "Hunian & Ruang Usaha Terpercaya",
  subtagline: "Kos, Rumah, dan Ruko pilihan terbaik di Jatabek",
  instagram: "@ummi.stay",
  facebook: "Ummi Stayy",
  email: "stay.at.ummi@gmail.com",
};

// ─── DATA PROPERTI ──────────────────────────────────────────
//
// CARA MENAMBAH PROPERTI BARU:
// 1. Salin salah satu blok { ... } di bawah
// 2. Tempel di dalam array, pisahkan dengan koma
// 3. Ubah semua field sesuai properti baru
// 4. Upload foto ke /public/images/{type}/{id}/
// 5. Isi array "images" dengan path foto
//
// FIELD:
//   id           → unik, huruf kecil, pisah dengan tanda -
//   type         → "kos" | "rumah" | "ruko"
//   name         → nama tampilan properti
//   location     → alamat lengkap
//   description  → deskripsi singkat (2–3 kalimat)
//   harga        → angka saja (Rupiah), tanpa titik/koma
//   periodeSewa  → "bulan" | "tahun"
//   status       → "tersedia" | "terisi"
//   fasilitas    → array string fasilitas
//   images       → array path foto dari folder /public/
//   waMessage    → pesan otomatis WhatsApp

export const properties = [

  // ════════════════════════════════════════
  //  KOS-KOSAN
  // ════════════════════════════════════════

  {
    id: "kos-kotabambu",
    type: "kos",
    name: "Kos Kota Bambu Selatan 2",
    location: "Kota Bambu Selatan 2, Jakarta Barat",
    description:
      "Kos strategis di jantung Jakarta Barat, dekat pusat perbelanjaan, transportasi umum, dan fasilitas kota. Kamar bersih, aman, dan nyaman untuk mahasiswa maupun pekerja.",
    harga: 1500000,
    periodeSewa: "bulan",
    status: "tersedia",
    fasilitas: ["AC", "Kipas", "WiFi Gratis", "Kamar Mandi Dalam", "Kamar Mandi Luar", "Parkir Motor", "Dapur Bersama", "Ruang Tamu Bersama", "Lemari", "Jemuran", "Kasur"],
    images: [
      "/images/placeholder-kos.jpg",
    ],
    waMessage: "Halo Ummi, saya tertarik dengan *Kos Kota Bambu Selatan 2* di Jakarta Barat. Apakah masih tersedia? Mohon info lebih lanjut 🙏",
  },

  {
    id: "kos-cibodas",
    type: "kos",
    name: "Kos Cibodas Tangerang",
    location: "Cibodas, Tangerang",
    description: 
      "Kos nyaman di kawasan Cibodas, Tangerang. Akses mudah ke berbagai kawasan industri dan pusat kota Tangerang. Lingkungan tenang dan aman.",
    harga: 1200000,
    periodeSewa: "bulan",
    status: "tersedia",
    fasilitas: ["WiFi Gratis", "Parkir Motor", "Kamar Mandi Dalam", "Dapur Dalam Kamar", "Keamanan 24 Jam"],
    images: [
      "/images/placeholder-kos.jpg",
    ],
    waMessage: "Halo Ummi , saya tertarik dengan *Kos Cibodas Tangerang* di Jl. Kavling Perkebunan 1. Apakah masih tersedia? Mohon info lebih lanjut 🙏",
  },

  {
    id: "kos-bekasitimur",
    type: "kos",
    name: "Kos Duren Jaya Bekasi Timur",
    location: "Jl. Pahlawan Gang Ros, Kel. Duren Jaya, Kec. Bekasi Timur",
    description:
      "Kos lokasi strategis di Bekasi Timur, dekat berbagai pusat perbelanjaan dan akses transportasi. Cocok untuk mahasiswa dan karyawan yang bekerja di area Bekasi.",
    harga: 1000000,
    periodeSewa: "bulan",
    status: "tersedia",
    fasilitas: ["WiFi Gratis", "Parkir Motor", "Air Panas", "Kamar Mandi Dalam"],
    images: [
      "/images/placeholder-kos.jpg",
    ],
    waMessage: "Halo Ummi, saya tertarik dengan *Kos Duren Jaya Bekasi Timur* di Jl. Pahlawan Gang Ros. Apakah masih tersedia? Mohon info lebih lanjut 🙏",
  },

  // ════════════════════════════════════════
  //  SEWA RUMAH
  // ════════════════════════════════════════

  {
    id: "rumah-villarizki",
    type: "rumah",
    name: "Rumah Cluster Villa Rizki Ilhami",
    location: "Kelapa Dua, Tangerang",
    description:
      "Rumah cluster eksklusif di lingkungan asri dan aman Villa Rizki Ilhami, Tangerang. Desain modern dengan 3 kamar tidur, cocok untuk keluarga yang menginginkan hunian nyaman dan berkelas.",
    harga: 25000000,
    periodeSewa: "tahun",
    status: "tersedia",
    fasilitas: ["2 Kamar Tidur", "1 Kamar Mandi", "Dapur", "Garasi", "Halaman Depan", "Keamanan 24 Jam"],
    images: [
      "/images/placeholder-rumah.jpg",
    ],
    waMessage: "Halo Ummi, saya tertarik dengan *Rumah Cluster Villa Rizki Ilhami Blok E8* di Tangerang. Apakah masih tersedia? Mohon info lebih lanjut 🙏",
  },

  // ════════════════════════════════════════
  //  SEWA RUKO
  // ════════════════════════════════════════

  {
    id: "ruko-bekasitimur-1",
    type: "ruko",
    name: "Ruko Duren Jaya Bekasi Timur (Unit 1)",
    location: "Duren Jaya, Bekasi Timur",
    description:
      "Ruko 1 lantai di lokasi strategis Bekasi Timur, cocok untuk berbagai jenis usaha. Akses jalan lebar, parkir luas, dan berada di area komersial yang ramai.",
    harga: 30000000,
    periodeSewa: "tahun",
    status: "tersedia",
    fasilitas: ["1 Lantai", "Akses Jalan 1 Mobil", "Parkir Luas", "Toilet"],
    images: [
      "/images/placeholder-ruko.jpg",
    ],
    waMessage: "Halo Ummi, saya tertarik dengan *Ruko Duren Jaya Bekasi Timur (Unit 1)*. Apakah masih tersedia? Mohon info lebih lanjut 🙏",
  },

  {
    id: "ruko-bekasitimur-2",
    type: "ruko",
    name: "Ruko Duren Jaya Bekasi Timur (Unit 2)",
    location: "Duren Jaya, Bekasi Timur",
    description:
      "Ruko 1 lantai di lokasi strategis Bekasi Timur, cocok untuk berbagai jenis usaha. Akses jalan lebar, parkir luas, dan berada di area komersial yang ramai.",
    harga: 30000000,
    periodeSewa: "tahun",
    status: "tersedia",
    fasilitas: ["1 Lantai", "Akses Jalan 1 Mobil", "Parkir Luas", "Toilet"],
    images: [
      "/images/placeholder-ruko.jpg",
    ],
    waMessage: "Halo Ummi, saya tertarik dengan *Ruko Duren Jaya Bekasi Timur (Unit 2)*. Apakah masih tersedia? Mohon info lebih lanjut 🙏",
  },

];
