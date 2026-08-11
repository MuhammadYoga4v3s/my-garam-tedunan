import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Leaf, 
  HeartHandshake, 
  TrendingUp, 
  MapPin, 
  Waves, 
  Sun, 
  Sparkles, 
  Sprout, 
  Fish, 
  Store, 
  Palmtree, 
  ArrowRight 
} from "lucide-react";

export default function TentangTedunanPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Hero Section Halaman Tentang Tedunan */}
        <div className="relative bg-[#112233] text-white overflow-hidden pb-20">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src="/images/Dokumentasi 8.jpg" 
              alt="Desa Tedunan" 
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
              <span className="text-blue-400 font-medium">Tentang Tedunan</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="text-blue-400 font-medium tracking-wide text-xs bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800 inline-block">
                Mengenal Lebih Dekat
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Desa Tedunan
              </h1>
              <p className="text-xl text-blue-200 font-medium">
                Sebuah Desa Pesisir dengan Potensi yang Terus Tumbuh
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Desa Tedunan merupakan salah satu desa pesisir di Kabupaten Demak, Jawa Tengah. Terletak tidak jauh dari garis pantai, desa ini memiliki kekayaan alam yang melimpah, serta masyarakat yang hidup berdampingan dengan laut dan tambak.
              </p>
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
          
          {/* Bagian Kehidupan di Desa Tedunan */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg bg-gray-100">
              <Image 
                src="/images/Dokumentasi 2.jpg" 
                alt="Kehidupan di Desa Tedunan" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Kehidupan di Desa Tedunan</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Masyarakat Desa Tedunan sebagian besar menggantungkan hidupnya pada sektor perikanan, pertanian tambak, dan produksi garam. Lingkungan pesisir yang luas dan kondisi alam yang mendukung menjadi berkah tersendiri bagi warga desa.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dengan semangat gotong royong dan kearifan lokal yang terus dijaga, masyarakat Tedunan berusaha mengelola sumber daya yang ada secara berkelanjutan untuk kehidupan yang lebih baik.
              </p>
            </div>
          </section>

          {/* 4 Card Nilai Desa */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl text-center space-y-3">
              <div className="p-3 bg-white text-blue-600 rounded-xl w-fit mx-auto shadow-sm"><Users size={24} /></div>
              <h3 className="font-bold text-gray-900">Gotong Royong</h3>
              <p className="text-xs text-gray-600">Budaya kebersamaan yang menjadi kekuatan utama masyarakat.</p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl text-center space-y-3">
              <div className="p-3 bg-white text-blue-600 rounded-xl w-fit mx-auto shadow-sm"><Leaf size={24} /></div>
              <h3 className="font-bold text-gray-900">Kearifan Lokal</h3>
              <p className="text-xs text-gray-600">Pengalaman turun-temurun dalam mengelola alam dan sumber daya.</p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl text-center space-y-3">
              <div className="p-3 bg-white text-blue-600 rounded-xl w-fit mx-auto shadow-sm"><HeartHandshake size={24} /></div>
              <h3 className="font-bold text-gray-900">Kehidupan Pesisir</h3>
              <p className="text-xs text-gray-600">Hidup harmonis berdampingan dengan laut, tambak, dan lingkungan sekitar.</p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl text-center space-y-3">
              <div className="p-3 bg-white text-blue-600 rounded-xl w-fit mx-auto shadow-sm"><TrendingUp size={24} /></div>
              <h3 className="font-bold text-gray-900">Potensi yang Terus Tumbuh</h3>
              <p className="text-xs text-gray-600">Berbagai potensi lokal yang dikembangkan untuk masa depan desa.</p>
            </div>
          </div>

          {/* Bagian Letak dan Lingkungan */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <div className="md:col-span-1 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Letak dan Lingkungan</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Desa Tedunan berada di wilayah pesisir Kabupaten Demak yang memiliki akses langsung menuju laut. Wilayah ini didominasi oleh tambak, lahan basah, dan area pesisir yang luas.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kondisi geografis ini memberikan peluang besar bagi masyarakat untuk mengembangkan berbagai potensi lokal, terutama pada sektor perikanan, tambak, dan produksi garam.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><MapPin size={24} /></div>
                <h3 className="font-bold text-gray-900 text-sm">Wilayah Pesisir</h3>
                <p className="text-xs text-gray-500">Berada di kawasan pesisir Kabupaten Demak.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Waves size={24} /></div>
                <h3 className="font-bold text-gray-900 text-sm">Dekat dengan Laut</h3>
                <p className="text-xs text-gray-500">Akses langsung menuju laut lepas.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Sun size={24} /></div>
                <h3 className="font-bold text-gray-900 text-sm">Iklim Tropis</h3>
                <p className="text-xs text-gray-500">Sinar matahari melimpah, mendukung produksi garam.</p>
              </div>
            </div>
          </section>

          {/* Bagian Potensi Desa Tedunan (5 Card Gambar) */}
          <section className="space-y-8 text-center">
            <div className="space-y-2 max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Potensi Desa Tedunan</h2>
              <p className="text-gray-600 text-sm">
                Beragam potensi lokal yang menjadi kekuatan dan peluang bagi kemajuan desa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative h-40 w-full"><Image src="/images/hero-garam.jpg" alt="Garam" fill className="object-cover" /></div>
                <div className="p-4 flex flex-col flex-grow space-y-2">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit"><Sparkles size={18} /></div>
                  <h3 className="font-bold text-gray-900">Garam</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Potensi utama desa dengan kualitas baik berkat dukungan alam dan pengalaman petani.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative h-40 w-full"><Image src="/images/Dokumentasi 4.jpg" alt="Pertanian" fill className="object-cover" /></div>
                <div className="p-4 flex flex-col flex-grow space-y-2">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit"><Sprout size={18} /></div>
                  <h3 className="font-bold text-gray-900">Pertanian</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Lahan subur untuk berbagai komoditas seperti padi, palawija, dan sayuran.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative h-40 w-full"><Image src="/images/Dokumentasi 6.jpg" alt="Perikanan" fill className="object-cover" /></div>
                <div className="p-4 flex flex-col flex-grow space-y-2">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit"><Fish size={18} /></div>
                  <h3 className="font-bold text-gray-900">Perikanan</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Sumber kehidupan masyarakat melalui penangkapan ikan dan budidaya tambak.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative h-40 w-full"><Image src="/images/Dokumentasi 9.jpg" alt="UMKM" fill className="object-cover" /></div>
                <div className="p-4 flex flex-col flex-grow space-y-2">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit"><Store size={18} /></div>
                  <h3 className="font-bold text-gray-900">UMKM</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Beragam usaha kecil yang terus berkembang dan mendukung ekonomi desa.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col sm:col-span-2 lg:col-span-1">
                <div className="relative h-40 w-full"><Image src="/images/Dokumentasi 10.jpg" alt="Potensi Pesisir" fill className="object-cover" /></div>
                <div className="p-4 flex flex-col flex-grow space-y-2">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg w-fit"><Palmtree size={18} /></div>
                  <h3 className="font-bold text-gray-900">Potensi Pesisir</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Peluang besar untuk ekowisata, edukasi, dan pengembangan wilayah.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Banner Bawah */}
          <section className="bg-[#112233] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Bersama Mengembangkan Potensi Desa</h3>
              <p className="text-gray-300 text-sm max-w-xl">
                Dengan menjaga alam, melestarikan tradisi, dan berinovasi, Desa Tedunan siap menuju masa depan yang lebih sejahtera.
              </p>
            </div>
            <div>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-white text-[#112233] hover:bg-gray-100 font-medium px-6 py-3 rounded-xl shadow transition text-sm"
              >
                Jelajahi Potensi Lainnya <ArrowRight size={16} />
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