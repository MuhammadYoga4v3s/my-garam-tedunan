import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  FileText, 
  Download, 
  Camera, 
  ArrowRight, 
  PhoneCall 
} from "lucide-react";

export default function InfografisGaleriPage() {
  const documents = [
    { num: "01", title: "Proses Pembuatan Garam Tedunan", desc: "Tahapan lengkap dari air laut hingga menjadi kristal garam berkualitas.", image: "/images/hero-garam.jpg" },
    { num: "02", title: "Produk Turunan Garam Tedunan", desc: "Berbagai inovasi produk turunan dan peluang bisnis yang menguntungkan.", image: "/images/tahu-nigarin.jpg" },
    { num: "03", title: "SOP Gudang Garam", desc: "Standar operasional prosedur penyimpanan garam agar tetap awet dan berkualitas.", image: "/images/Dokumentasi 5.jpg" },
    { num: "04", title: "Pengendalian Mutu Garam", desc: "Cara menjaga kualitas garam mulai dari produksi hingga distribusi.", image: "/images/garem-png.jpg" },
    { num: "05", title: "Manajemen Usaha Garam", desc: "Pengelolaan usaha garam yang efektif untuk meningkatkan pendapatan petani.", image: "/images/Dokumentasi 6.jpg" },
    { num: "06", title: "Kesehatan & Keamanan Kerja", desc: "Panduan keselamatan kerja di tambak garam untuk petani yang lebih aman.", image: "/images/Dokumentasi 2.jpg" },
    { num: "07", title: "Pengemasan & Labeling", desc: "Teknik pengemasan dan pelabelan produk garam agar lebih menarik & bernilai jual.", image: "/images/salt scrub.jpg" },
    { num: "08", title: "Pemasaran Produk Garam", desc: "Strategi pemasaran offline dan online untuk memperluas jangkauan pasar.", image: "/images/Dokumentasi 4.jpg" },
    { num: "09", title: "Diversifikasi Olahan Garam", desc: "Inovasi olahan garam untuk kebutuhan pangan, kesehatan, dan kecantikan.", image: "/images/garam krosok.jpg" },
    { num: "10", title: "Perawatan Tambak Garam", desc: "Tips merawat tambak agar produktivitas garam tetap optimal sepanjang tahun.", image: "/images/Dokumentasi 3.jpg" },
  ];

  // Menampilkan semua dokumentasi dari 1 sampai 11
  const galleryImages = [
    "/images/Dokumentasi 1.jpg",
    "/images/Dokumentasi 2.jpg",
    "/images/Dokumentasi 3.jpg",
    "/images/Dokumentasi 4.jpg",
    "/images/Dokumentasi 5.jpg",
    "/images/Dokumentasi 6.jpg",
    "/images/Dokumentasi 7.jpg",
    "/images/Dokumentasi 8.jpg",
    "/images/Dokumentasi 9.jpg",
    "/images/Dokumentasi 10.jpg",
    "/images/Dokumentasi 11.jpg",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Hero Section */}
        <div className="relative bg-[#112233] text-white overflow-hidden pb-20">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/images/hero-garam.jpg" alt="Infografis & Galeri" fill priority className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b192c]/80 via-[#0b192c]/60 to-[#112233]"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-12 space-y-6">
            <div className="text-sm text-gray-300 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition">Beranda</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Infografis & Galeri</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-blue-400 font-medium tracking-wide text-xs bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800 inline-block">
                  Edukasi. Inovasi. Inspirasi.
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Infografis & Galeri</h1>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Kumpulan infografis dan dokumentasi seputar Garam Tedunan. Unduh berbagai materi edukatif untuk menambah pengetahuan dan menginspirasi inovasi produk turunan garam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 space-y-24">
          
          {/* Bagian Unduh Infografis */}
          <section className="space-y-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Unduh Infografis Edukatif</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {documents.map((doc, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                  <div className="relative h-36 w-full bg-gray-100">
                    <Image src={doc.image} alt={doc.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 space-y-2 flex-grow">
                    <h3 className="font-bold text-gray-900 text-sm line-clamp-1">{doc.title}</h3>
                    <p className="text-[11px] text-gray-500 line-clamp-2">{doc.desc}</p>
                  </div>
                  <div className="p-4 pt-0">
                    <a href="#" className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2 rounded-xl text-xs font-medium hover:bg-blue-100 transition">
                      <Download size={14} /> Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bagian Galeri */}
          <section className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Galeri Kegiatan & Proses</h2>
            </div>

            {/* Grid Galeri - Menampilkan Semua Dokumentasi */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {galleryImages.map((src, idx) => (
                <div key={idx} className="relative h-44 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-gray-100 border border-gray-200">
                  <Image src={src} alt={`Dokumentasi ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>

          {/* Banner Bawah */}
          <section className="bg-blue-50/60 border border-blue-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Butuh Materi Edukasi Lainnya?</h3>
              <p className="text-gray-600 text-sm">Hubungi kami untuk dukungan lebih lanjut.</p>
            </div>
            <a href="#kontak" className="inline-flex items-center gap-2 bg-[#112233] text-white font-medium px-6 py-3 rounded-xl transition text-sm">
              <PhoneCall size={16} /> Hubungi Kami
            </a>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}