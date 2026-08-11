import Image from "next/image";
import { ArrowRight, Waves, Sun, ShieldCheck, HeartHandshake, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative bg-[#112233] text-white overflow-hidden">
      {/* Background Image dengan efek gelap */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/images/hero-garam.jpg" 
          alt="Petani Garam Tedunan" 
          fill 
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b192c]/80 via-[#0b192c]/50 to-[#112233]"></div>
      </div>

      {/* Konten Hero */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="text-blue-400 font-medium tracking-wide text-sm bg-blue-950/80 px-4 py-1.5 rounded-full border border-blue-800 inline-block">
            Dari Laut, Untuk Kehidupan
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Garam Tedunan
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Kristal putih dari pesisir Tedunan, hasil kerja keras dan kearifan lokal yang menjadi sumber kehidupan, penggerak ekonomi, dan kebanggaan masyarakat.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#potensi" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition"
            >
              Jelajahi Potensi Kami <ArrowRight size={18} />
            </a>
            <a 
              href="#tentang" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium px-6 py-3 rounded-xl border border-white/20 transition"
            >
              Tentang Tedunan
            </a>
          </div>
        </div>
      </div>

      {/* Card Fitur 5 Buah (Melengkung di Bawah) */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-16 pb-12">
        <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-6 grid grid-cols-2 md:grid-cols-5 gap-6 border border-gray-100">
          
          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Waves size={24} /></div>
            <h3 className="font-bold text-sm">Asli dari Pesisir</h3>
            <p className="text-xs text-gray-500">Dihasilkan dari air laut bersih di pesisir Desa Tedunan.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Sun size={24} /></div>
            <h3 className="font-bold text-sm">Proses Alami</h3>
            <p className="text-xs text-gray-500">Mengandalkan sinar matahari dan angin, tanpa bahan kimia.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><HeartHandshake size={24} /></div>
            <h3 className="font-bold text-sm">Dikerjakan dengan Ketekunan</h3>
            <p className="text-xs text-gray-500">Tradisi turun-temurun oleh petani garam lokal.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><ShieldCheck size={24} /></div>
            <h3 className="font-bold text-sm">Kualitas Terjaga</h3>
            <p className="text-xs text-gray-500">Kristal putih bersih dengan kualitas terbaik.</p>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center space-y-2 p-2">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Award size={24} /></div>
            <h3 className="font-bold text-sm">Dukung Ekonomi Lokal</h3>
            <p className="text-xs text-gray-500">Memberdayakan masyarakat dan menggerakkan ekonomi.</p>
          </div>

        </div>
      </div>
    </div>
  );
}