import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Globe, 
  CheckCircle2, 
  Store, 
  BookOpen, 
  FlaskConical, 
  Cog, 
  Package, 
  Megaphone, 
  LineChart, 
  ShieldCheck,
  ArrowRight 
} from "lucide-react";

export default function ProdukTurunanPage() {
  const products = [
    {
      title: "Tahu Air Nigarin",
      desc: "Cairan hasil pemrosesan air garam yang kaya mineral. Digunakan sebagai bahan tambahan makanan dan minuman sehat.",
      benefits: ["Sumber mineral alami", "Menambah cita rasa makanan", "Baik untuk kesehatan tubuh"],
      market: "Industri makanan & minuman, produk kesehatan, restoran",
      image: "/images/tahu-nigarin.jpg",
    },
    {
      title: "Rumah Prisma (Garam Mutiara)",
      desc: "Garam kristal berbentuk bulat seperti mutiara dengan tekstur halus dan tampilan menarik, cocok untuk kebutuhan kuliner premium.",
      benefits: ["Tampilan premium & elegan", "Mudah larut, rasa lebih lembut", "Cocok untuk finishing makanan"],
      market: "Restoran, hotel, katering, pasar kuliner premium",
      image: "/images/rumah prisma.jpg",
    },
    {
      title: "Garam Krosok Vanilla",
      desc: "Garam krosok (butiran kasar) dengan aroma vanilla alami. Memberi rasa unik dan aroma harum pada berbagai hidangan.",
      benefits: ["Aroma vanilla alami", "Cocok untuk marinasi & grilling", "Memberi rasa gurih & harum"],
      market: "UMKM kuliner, toko oleh-oleh, pasar modern",
      image: "/images/garam krosok.jpg",
    },
    {
      title: "Salt Scrub",
      desc: "Produk perawatan tubuh dari garam alami yang berfungsi untuk eksfoliasi kulit, membuat kulit lebih bersih, halus, dan sehat.",
      benefits: ["Mengangkat sel kulit mati", "Melembutkan dan mencerahkan kulit", "Relaksasi dengan aroma alami"],
      market: "Industri kecantikan, spa, toko online, oleh-oleh",
      image: "/images/salt scrub.jpg",
    },
  ];

  const steps = [
    { num: "01", title: "Edukasi & Pelatihan", desc: "Belajar bersama tentang pengolahan garam menjadi produk turunan.", icon: <BookOpen size={20} className="text-blue-600" /> },
    { num: "02", title: "Riset & Uji Coba", desc: "Mencoba resep dan metode terbaik untuk menghasilkan produk berkualitas.", icon: <FlaskConical size={20} className="text-blue-600" /> },
    { num: "03", title: "Produksi", desc: "Melakukan proses produksi dengan standar kebersihan dan kualitas yang baik.", icon: <Cog size={20} className="text-blue-600" /> },
    { num: "04", title: "Pengemasan", desc: "Mengemas produk dengan menarik agar nilai jual semakin tinggi.", icon: <Package size={20} className="text-blue-600" /> },
    { num: "05", title: "Pemasaran", desc: "Memasarkan produk secara online maupun offline ke berbagai pasar.", icon: <Megaphone size={20} className="text-blue-600" /> },
    { num: "06", title: "Evaluasi & Inovasi", desc: "Terus mengevaluasi dan berinovasi untuk produk yang lebih baik.", icon: <LineChart size={20} className="text-blue-600" /> },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Hero Section Halaman Produk Turunan */}
        <div className="relative bg-[#112233] text-white overflow-hidden pb-20">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src="/images/garem-png.jpg" 
              alt="Produk Turunan Garam" 
              fill 
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b192c]/80 via-[#0b192c]/60 to-[#112233]"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-12 space-y-6">
            <div className="text-sm text-gray-300 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition">Beranda</Link>
              <span>/</span>
              <span className="text-blue-400 font-medium">Produk Turunan</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="text-blue-400 font-medium tracking-wide text-xs bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800 inline-block">
                Lebih dari Sekadar Garam
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Produk Turunan Garam Tedunan
              </h1>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Garam Tedunan memiliki potensi besar untuk diolah menjadi berbagai produk turunan bernilai tambah. Dengan inovasi sederhana, garam dapat menjadi produk yang bermanfaat, diminati pasar, dan meningkatkan kesejahteraan petani garam.
              </p>
            </div>
          </div>

          {/* 4 Card Keunggulan di Bawah Hero */}
          <div className="relative z-20 max-w-6xl mx-auto px-6 -mb-10 pt-4">
            <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Sparkles size={24} /></div>
                <h3 className="font-bold text-sm">Inovatif</h3>
                <p className="text-xs text-gray-500">Mengolah garam menjadi produk yang lebih bervariasi</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><TrendingUp size={24} /></div>
                <h3 className="font-bold text-sm">Bernilai Tambah</h3>
                <p className="text-xs text-gray-500">Meningkatkan nilai ekonomi dan daya jual produk</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Users size={24} /></div>
                <h3 className="font-bold text-sm">Memberdayakan</h3>
                <p className="text-xs text-gray-500">Membuka peluang usaha baru bagi masyarakat</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Globe size={24} /></div>
                <h3 className="font-bold text-sm">Berkelanjutan</h3>
                <p className="text-xs text-gray-500">Mendukung ekonomi lokal secara berkelanjutan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 space-y-24">
          
          {/* Header Produk Unggulan */}
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Inovasi Lokal
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Produk Turunan Unggulan</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Berbagai inovasi produk turunan dari Garam Tedunan yang dapat menjadi peluang usaha dan meningkatkan nilai ekonomi.
            </p>
          </div>

          {/* Grid 4 Produk Unggulan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-60 w-full bg-gray-100">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">Manfaat & Kegunaan</span>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {item.benefits.map((b, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-blue-600 shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="bg-blue-50/60 border border-blue-100 p-4 rounded-2xl flex items-center gap-3">
                    <div className="p-2 bg-white text-blue-600 rounded-xl shadow-xs"><Store size={20} /></div>
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">Peluang Pasar</span>
                      <p className="text-xs text-gray-700 font-medium">{item.market}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mengapa Produk Turunan Garam Itu Penting? */}
          <section className="bg-blue-50/40 border border-blue-100 p-8 md:p-12 rounded-3xl space-y-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Urgensi & Manfaat
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Mengapa Produk Turunan Garam Itu Penting?</h2>
              <p className="text-xs text-gray-600">
                Mengolah garam menjadi produk turunan membuka banyak peluang dan manfaat bagi petani garam dan masyarakat Desa Tedunan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><TrendingUp size={22} /></div>
                <h3 className="font-bold text-gray-900 text-sm">Meningkatkan Pendapatan</h3>
                <p className="text-xs text-gray-500">Produk turunan memiliki nilai jual lebih tinggi dibandingkan menjual garam mentah.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Users size={22} /></div>
                <h3 className="font-bold text-gray-900 text-sm">Membuka Lapangan Kerja</h3>
                <p className="text-xs text-gray-500">Proses pengolahan menciptakan peluang kerja baru bagi masyarakat sekitar, terutama ibu rumah tangga.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><ShieldCheck size={22} /></div>
                <h3 className="font-bold text-gray-900 text-sm">Mengurangi Ketergantungan</h3>
                <p className="text-xs text-gray-500">Tidak hanya bergantung pada harga garam mentah yang fluktuatif di pasaran.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Sparkles size={22} /></div>
                <h3 className="font-bold text-gray-900 text-sm">Produk Lebih Variatif</h3>
                <p className="text-xs text-gray-500">Memenuhi kebutuhan pasar yang semakin beragam dan mengikuti tren gaya hidup sehat.</p>
              </div>
            </div>
          </section>

          {/* Langkah Mengembangkan Produk Turunan (6 Tahap) */}
          <section className="space-y-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Alur Inovasi
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Langkah Mengembangkan Produk Turunan</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3 relative">
                  <span className="absolute top-4 right-4 text-xs font-bold text-blue-200">{s.num}</span>
                  <div className="p-3 bg-blue-50 rounded-xl w-fit">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 text-base">{s.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Banner Bawah */}
          <section className="bg-[#112233] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Mari Berinovasi, Tingkatkan Nilai Garam Tedunan!</h3>
              <p className="text-gray-300 text-sm max-w-xl">
                Dengan kreativitas dan semangat kebersamaan, Garam Tedunan bisa menjadi produk unggulan yang dikenal luas dan membanggakan desa kita.
              </p>
            </div>
            <div>
              <Link 
                href="/#pdf" 
                className="inline-flex items-center gap-2 bg-white text-[#112233] hover:bg-gray-100 font-medium px-6 py-3 rounded-xl shadow transition text-sm"
              >
                Lihat Infografis & Panduan <ArrowRight size={16} />
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}