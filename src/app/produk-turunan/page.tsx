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
      subtitle: "Inovasi Olahan Pangan Sehat Berbasis Air Tua",
      desc: "Cairan air tua (nigarin) yang dihasilkan dari sisa kristalisasi garam kaya akan kandungan magnesium dan kalsium. Di Desa Tedunan, cairan ini dimanfaatkan secara kreatif sebagai bahan pengganti koagulan alami dalam pembuatan tahu, menghasilkan tekstur yang unik serta kaya nutrisi.",
      benefits: [
        "Sumber mineral alami esensial bagi tubuh",
        "Menambah cita rasa gurih khas pada olahan makanan",
        "Alternatif koagulan sehat bebas bahan kimia sintetis",
        "Mendukung diversifikasi pangan lokal bernilai gizi tinggi"
      ],
      market: "Industri makanan & minuman rumahan, produsen tahu lokal, pasar produk kesehatan, serta restoran sehat.",
      image: "/images/tahu-nigarin.jpg",
    },
    {
      title: "Rumah Prisma (Garam Mutiara)",
      subtitle: "Kristal Garam Premium untuk Kuliner Berkelas",
      desc: "Garam kristal murni yang diproduksi menggunakan inovasi rumah prisma pelindung, menghasilkan bentuk butiran menyerupai mutiara dengan tingkat kemurnian tinggi, tekstur bersih, dan tampilan visual yang sangat elegan untuk kebutuhan dapur modern.",
      benefits: [
        "Tampilan visual kristal putih bersih, premium & elegan",
        "Mudah larut secara merata dengan tingkat keasinan yang pas",
        "Sangat ideal digunakan sebagai finishing touch pada hidangan chef",
        "Diproduksi di bawah standar higienitas dan kontrol kualitas ketat"
      ],
      market: "Restoran fine dining, hotel berbintang, katering eksklusif, serta pasar kuliner premium perkotaan.",
      image: "/images/rumah prisma.jpg",
    },
    {
      title: "Garam Krosok Vanilla",
      subtitle: "Garam Kasar Beraroma Alami untuk Varian Rasa Unik",
      desc: "Perpaduan harmonis antara garam krosok tradisional pesisir Tedunan yang kaya mineral dengan ekstrak aroma vanilla alami pilihan. Inovasi ini memberikan sentuhan aroma harum yang khas sekaligus menyeimbangkan rasa gurih pada berbagai sajian kuliner khusus.",
      benefits: [
        "Sentuhan aroma vanilla alami yang menenangkan dan khas",
        "Sangat cocok diaplikasikan untuk teknik marinasi, baking, dan grilling",
        "Memberikan dimensi rasa baru: perpaduan gurih alami dan keharuman lembut",
        "Kemasan kedap udara menjaga kualitas aroma tetap awet dalam jangka panjang"
      ],
      market: "UMKM kuliner kreatif, produsen bumbu dapur modern, toko oleh-oleh khas daerah, dan pasar ritel modern.",
      image: "/images/garam krosok.jpg",
    },
    {
      title: "Salt Scrub",
      subtitle: "Perawatan Tubuh Alami untuk Kecantikan Kulit",
      desc: "Produk perawatan tubuh (body care) inovatif yang memanfaatkan butiran kristal garam halus berkualitas tinggi sebagai agen eksfoliasi alami. Berkhasiat untuk mengangkat sel-sel kulit mati, melancarkan peredaran darah, serta melembutkan kulit secara optimal.",
      benefits: [
        "Efektif mengangkat sel kulit mati dan kotoran secara mendalam",
        "Membantu mencerahkan, menyegarkan, dan melembutkan tekstur kulit",
        "Memberikan sensasi relaksasi menyeluruh melalui paduan aroma terapi",
        "Formulasi aman berbahan dasar kristal garam murni tanpa efek samping berbahaya"
      ],
      market: "Industri kecantikan lokal, salon dan spa kecantikan, toko online e-commerce, serta pusat suvenir oleh-oleh.",
      image: "/images/salt scrub.jpg",
    },
  ];

  const steps = [
    { 
      num: "01", 
      title: "Edukasi & Pelatihan Masyarakat", 
      desc: "Mengadakan sesi transfer pengetahuan, pelatihan teknis, dan pendampingan bersama warga serta petani garam mengenai potensi besar pengolahan produk turunan.", 
      icon: <BookOpen size={22} className="text-blue-600" /> 
    },
    { 
      num: "02", 
      title: "Riset, Eksperimen & Uji Coba", 
      desc: "Melakukan serangkaian uji coba resep, komposisi takaran, dan standar metode pengolahan terbaik guna memastikan produk akhir yang higienis, aman, dan berkualitas tinggi.", 
      icon: <FlaskConical size={22} className="text-blue-600" /> 
    },
    { 
      num: "03", 
      title: "Proses Produksi Terstandar", 
      desc: "Menjalankan tahapan produksi secara konsisten dengan mengedepankan prinsip kebersihan alat, ketepatan formula, dan pengawasan mutu di setiap batch pembuatan.", 
      icon: <Cog size={22} className="text-blue-600" /> 
    },
    { 
      num: "04", 
      title: "Pengemasan Modern & Menarik", 
      desc: "Merancang desain kemasan (packaging) yang estetis, kedap udara, dan informatif guna mendongkrak nilai jual estetika serta daya saing produk di pasaran luas.", 
      icon: <Package size={22} className="text-blue-600" /> 
    },
    { 
      num: "05", 
      title: "Strategi Pemasaran Luas", 
      desc: "Memasarkan produk secara terintegrasi melalui jalur konvensional (offline store, pusat oleh-oleh) maupun digital marketing (media sosial dan e-commerce).", 
      icon: <Megaphone size={22} className="text-blue-600" /> 
    },
    { 
      num: "06", 
      title: "Evaluasi Berkala & Inovasi", 
      desc: "Menampung ulasan konsumen serta terus melakukan pengembangan varian produk baru agar senantiasa relevan dengan kebutuhan tren pasar yang dinamis.", 
      icon: <LineChart size={22} className="text-blue-600" /> 
    },
  ];

  const urgencies = [
    {
      title: "Meningkatkan Pendapatan Ekonomi",
      desc: "Pengolahan produk turunan mampu mendongkrak nilai jual ekonomi berkali-kali lipat dibandingkan hanya menjual garam mentah konvensional.",
      icon: <TrendingUp size={24} className="text-blue-600" />
    },
    {
      title: "Membuka Lapangan Pekerjaan Baru",
      desc: "Menciptakan peluang kerja produktif bagi warga sekitar desa, terutama memberdayakan peran aktif ibu rumah tangga dalam sektor pengolahan.",
      icon: <Users size={24} className="text-blue-600" />
    },
    {
      title: "Mengurangi Ketergantungan Pasar",
      desc: "Melindungi kestabilan finansial petani dari fluktuasi harga jual garam mentah musiman yang sering tidak menentu di pasaran bebas.",
      icon: <ShieldCheck size={24} className="text-blue-600" />
    },
    {
      title: "Diversifikasi & Tren Gaya Hidup",
      desc: "Menjawab kebutuhan pasar modern yang semakin beralih pada produk-produk natural, organik, sehat, dan memiliki fungsi kegunaan ganda.",
      icon: <Sparkles size={24} className="text-blue-600" />
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Hero Section Halaman Produk Turunan */}
        <div className="relative bg-[#112233] text-white overflow-hidden pb-24 pt-8">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="/images/hero-garem.jpg" 
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
                Inovasi & Nilai Tambah
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Produk Turunan Garam Tedunan
              </h1>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Garam Tedunan tidak hanya berhenti sebagai komoditas mentah. Melalui sentuhan inovasi teknologi tepat guna dan kearifan lokal, potensi garam pesisir ini diolah menjadi ragam produk turunan bernilai ekonomi tinggi yang bermanfaat luas bagi kehidupan masyarakat modern.
              </p>
            </div>
          </div>

          {/* 4 Card Keunggulan di Bawah Hero */}
          <div className="relative z-20 max-w-6xl mx-auto px-6 -mb-16 pt-4">
            <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Sparkles size={24} /></div>
                <h3 className="font-bold text-sm">Inovatif</h3>
                <p className="text-xs text-gray-500">Transformasi garam menjadi variasi produk kreatif</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><TrendingUp size={24} /></div>
                <h3 className="font-bold text-sm">Bernilai Tambah</h3>
                <p className="text-xs text-gray-500">Meningkatkan nilai jual dan daya saing ekonomi</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Users size={24} /></div>
                <h3 className="font-bold text-sm">Memberdayakan</h3>
                <p className="text-xs text-gray-500">Membuka lapangan kerja baru bagi warga desa</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Globe size={24} /></div>
                <h3 className="font-bold text-sm">Berkelanjutan</h3>
                <p className="text-xs text-gray-500">Mendukung kemandirian ekonomi jangka panjang</p>
              </div>
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 space-y-28">
          
          {/* Header Produk Unggulan */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Katalog Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Produk Turunan & Olahan</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Berikut adalah lini produk inovatif hasil pengembangan potensi garam dan kekayaan alam Desa Tedunan yang siap memenuhi kebutuhan pasar lokal maupun regional.
            </p>
          </div>

          {/* Grid 4 Produk Unggulan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover hover:scale-105 transition duration-500" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full">
                      {item.subtitle}
                    </div>
                  </div>
                  <div className="p-8 space-y-5">
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    
                    <div className="space-y-2.5 pt-2 border-t border-gray-100">
                      <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">Keunggulan & Manfaat Utama</span>
                      <ul className="space-y-2 text-xs text-gray-600">
                        {item.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" /> 
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="bg-blue-50/60 border border-blue-100 p-4 rounded-2xl flex items-start gap-3">
                    <div className="p-2 bg-white text-blue-600 rounded-xl shadow-xs shrink-0"><Store size={20} /></div>
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">Sasaran Peluang Pasar</span>
                      <p className="text-xs text-gray-700 font-medium mt-0.5 leading-relaxed">{item.market}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mengapa Produk Turunan Garam Itu Penting? */}
          <section className="bg-blue-50/40 border border-blue-100 p-8 md:p-14 rounded-3xl space-y-10">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Urgensi & Dampak Strategis
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Mengapa Produk Turunan Garam Itu Penting?</h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                Transformasi pengolahan komoditas mentah menjadi produk hilirisasi bernilai tambah tinggi membawa dampak perubahan struktural yang signifikan bagi kemajuan ekonomi kerakyatan di Desa Tedunan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {urgencies.map((urg, uIdx) => (
                <div key={uIdx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit">{urg.icon}</div>
                    <h3 className="font-bold text-gray-900 text-sm">{urg.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{urg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Langkah Mengembangkan Produk Turunan (6 Tahap) */}
          <section className="space-y-10">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Alur Sistematis
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Langkah Mengembangkan Produk Turunan</h2>
              <p className="text-xs text-gray-600">
                Tahapan terstruktur yang diterapkan untuk memastikan setiap inovasi produk berjalan dari hulu ke hilir secara berkelanjutan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="bg-white p-7 rounded-2xl border border-gray-200/80 shadow-sm space-y-4 relative overflow-hidden group hover:border-blue-300 transition">
                  <span className="absolute top-4 right-4 text-2xl font-black text-blue-100 group-hover:text-blue-200 transition">{s.num}</span>
                  <div className="p-3 bg-blue-50 rounded-xl w-fit">{s.icon}</div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900 text-base">{s.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Banner Bawah */}
          <section className="bg-[#112233] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Mari Berinovasi, Tingkatkan Nilai Garam Tedunan!</h3>
              <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
                Dengan kreativitas, pemanfaatan teknologi tepat guna, dan semangat kebersamaan, Garam Tedunan siap menjadi produk unggulan daerah yang membanggakan. Pelajari panduan lengkapnya melalui materi edukasi kami.
              </p>
            </div>
            <div className="shrink-0">
              <Link 
                href="/infografis-galeri" 
                className="inline-flex items-center gap-2 bg-white text-[#112233] hover:bg-gray-100 font-semibold px-6 py-3.5 rounded-xl shadow transition text-sm"
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