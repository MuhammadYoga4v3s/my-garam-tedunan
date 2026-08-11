import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Sun, 
  Waves, 
  Leaf, 
  ShieldCheck, 
  CloudRain, 
  Wind, 
  Droplets, 
  Landmark, 
  Users, 
  Sparkles, 
  ShoppingBag, 
  Flame, 
  Home, 
  ArrowRight 
} from "lucide-react";

export default function ProsesPembuatanPage() {
  const processSteps = [
    {
      num: "01",
      title: "Persiapan Lahan Tambak",
      desc: "Lahan tambak dibersihkan dan diratakan agar air dapat tersenang dengan merata. Pematang tambak diperiksa dan diperkuat untuk menjaga aliran air.",
      fact: "Lahan yang baik menentukan keberhasilan produksi garam.",
      image: "/images/Dokumentasi 12.jpeg",
      icon: <Landmark size={20} className="text-blue-600" />
    },
    {
      num: "02",
      title: "Pemasukan Air Laut",
      desc: "Air laut dialirkan ke petakan pertama melalui saluran. Volume dan ketinggian air diatur agar proses penguapan dapat berlangsung optimal.",
      fact: "Air laut yang bersih akan menghasilkan kualitas garam yang lebih baik.",
      image: "/images/Dokumentasi 13.jpeg",
      icon: <Waves size={20} className="text-blue-600" />
    },
    {
      num: "03",
      title: "Penguapan",
      desc: "Panas matahari dan hembusan angin menguapkan air laut secara alami. Semakin tinggi panas matahari, semakin cepat penguapan terjadi.",
      fact: "Cuaca cerah adalah kunci utama dalam proses penguapan.",
      image: "/images/Dokumentasi 3.jpg",
      icon: <Sun size={20} className="text-blue-600" />
    },
    {
      num: "04",
      title: "Pemekatan Air Garam",
      desc: "Air garam yang telah menguap dipindahkan ke petakan berikutnya untuk meningkatkan konsentrasi kadar garam.",
      fact: "Konsentrasi garam meningkat seiring berkurangnya volume air.",
      image: "/images/Dokumentasi 4.jpg",
      icon: <Droplets size={20} className="text-blue-600" />
    },
    {
      num: "05",
      title: "Kristalisasi",
      desc: "Ketika konsentrasi garam mencapai titik tertentu, kristal garam mulai terbentuk di permukaan tambak.",
      fact: "Proses ini terjadi secara alami dan membutuhkan kesabaran.",
      image: "/images/Dokumentasi 3.jpg",
      icon: <Sparkles size={20} className="text-blue-600" />
    },
    {
      num: "06",
      title: "Pemanenan",
      desc: "Garam yang telah mengkristal dikumpulkan menggunakan alat khusus lalu ditumpuk di pematang tambak.",
      fact: "Waktu panen biasanya dilakukan pada pagi hari saat cuaca cerah.",
      image: "/images/hero-garam.jpeg",
      icon: <ShoppingBag size={20} className="text-blue-600" />
    },
    {
      num: "07",
      title: "Pengeringan",
      desc: "Garam dijemur kembali untuk mengurangi kadar air agar garam lebih kering dan tahan disimpan.",
      fact: "Pengeringan yang baik menjaga garam tetap putih dan tidak menggumpal.",
      image: "/images/Dokumentasi 9.jpg",
      icon: <Flame size={20} className="text-blue-600" />
    },
    {
      num: "08",
      title: "Penyimpanan",
      desc: "Garam yang telah kering disimpan di tempat yang bersih dan kering agar kualitasnya tetap terjaga sebelum didistribusikan atau diolah.",
      fact: "Kelembapan adalah musuh utama kualitas garam.",
      image: "/images/Dokumentasi 14.jpeg",
      icon: <Home size={20} className="text-blue-600" />
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Hero Section Halaman Proses Pembuatan */}
        <div className="relative bg-[#112233] text-white overflow-hidden pb-20">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src="/images/Dokumentasi 2.jpg" 
              alt="Proses Pembuatan Garam" 
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
              <span className="text-blue-400 font-medium">Proses Pembuatan</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="text-blue-400 font-medium tracking-wide text-xs bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800 inline-block">
                Dari Laut Menjadi Kristal
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Proses Pembuatan Garam Tedunan
              </h1>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Proses pembuatan garam merupakan perpaduan antara alam dan ketekunan manusia. Dari air laut yang mengalir ke tambak hingga menjadi kristal putih yang siap dipanen.
              </p>
            </div>
          </div>

          {/* 4 Card Fitur di Bawah Hero */}
          <div className="relative z-20 max-w-6xl mx-auto px-6 -mb-10 pt-4">
            <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Sun size={24} /></div>
                <h3 className="font-bold text-sm">Memanfaatkan Sinar Matahari</h3>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Waves size={24} /></div>
                <h3 className="font-bold text-sm">Proses Alami Tanpa Bahan Kimia</h3>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Leaf size={24} /></div>
                <h3 className="font-bold text-sm">Dikelola dengan Pengalaman Petani</h3>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><ShieldCheck size={24} /></div>
                <h3 className="font-bold text-sm">Menghasilkan Garam Berkualitas Baik</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Konten Utama: 8 Tahapan Proses */}
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 space-y-16">
          <div className="space-y-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gray-50/60 p-6 rounded-3xl border border-gray-100 shadow-sm">
                
                {/* Nomor Urut & Gambar */}
                <div className="md:col-span-5 flex items-center gap-4">
                  <span className="text-2xl font-black text-blue-300 w-10 text-center">{step.num}</span>
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm bg-gray-200">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                </div>

                {/* Deskripsi Tahapan */}
                <div className="md:col-span-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-100 rounded-lg">{step.icon}</div>
                    <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>

                {/* Fakta Penting (Card Kanan) */}
                <div className="md:col-span-3 bg-white p-4 rounded-2xl border border-blue-100 shadow-xs space-y-1">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">Fakta Penting</span>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">{step.fact}</p>
                </div>

              </div>
            ))}
          </div>

          {/* Faktor yang Memengaruhi Produksi Garam */}
          <section className="bg-blue-50/40 border border-blue-100 p-8 md:p-12 rounded-3xl space-y-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Faktor Penunjang
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Faktor yang Memengaruhi Produksi Garam</h2>
              <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Sun size={20} /></div>
                <h3 className="font-bold text-gray-900 text-xs">Matahari</h3>
                <p className="text-[11px] text-gray-500">Semakin optimal panas matahari, semakin cepat air menguap.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><CloudRain size={20} /></div>
                <h3 className="font-bold text-gray-900 text-xs">Curah Hujan</h3>
                <p className="text-[11px] text-gray-500">Hujan dapat menghambat penguapan dan menurunkan kualitas garam.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Wind size={20} /></div>
                <h3 className="font-bold text-gray-900 text-xs">Angin</h3>
                <p className="text-[11px] text-gray-500">Angin membantu proses penguapan air menjadi lebih cepat.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Droplets size={20} /></div>
                <h3 className="font-bold text-gray-900 text-xs">Kualitas Air</h3>
                <p className="text-[11px] text-gray-500">Air laut yang bersih akan menghasilkan garam dengan kualitas baik.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Landmark size={20} /></div>
                <h3 className="font-bold text-gray-900 text-xs">Kondisi Tambak</h3>
                <p className="text-[11px] text-gray-500">Pengelolaan lahan tambak menentukan kelancaran proses produksi.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Users size={20} /></div>
                <h3 className="font-bold text-gray-900 text-xs">Keterampilan Petani</h3>
                <p className="text-[11px] text-gray-500">Pengalaman dan ketekunan petani sangat menentukan hasil produksi.</p>
              </div>
            </div>
          </section>

          {/* Banner Bawah */}
          <section className="bg-[#112233] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Setiap Tahap adalah Ketekunan</h3>
              <p className="text-gray-300 text-sm max-w-xl">
                Dari persiapan hingga penyimpanan, semua tahap dilakukan dengan teliti dan penuh ketekunan untuk menghasilkan garam terbaik dari Desa Tedunan.
              </p>
            </div>
            <div>
              <Link 
                href="/garam-tedunan" 
                className="inline-flex items-center gap-2 bg-white text-[#112233] hover:bg-gray-100 font-medium px-6 py-3 rounded-xl shadow transition text-sm"
              >
                Kenali Garam Tedunan <ArrowRight size={16} />
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