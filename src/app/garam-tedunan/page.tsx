import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Waves, 
  Sun, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  Utensils, 
  Activity, 
  Coins, 
  History, 
  Users, 
  Maximize2, 
  Calendar, 
  ArrowRight 
} from "lucide-react";

export default function GaramTedunanPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Hero Section Halaman Garam Tedunan */}
        <div className="relative bg-[#112233] text-white overflow-hidden pb-20">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src="/images/hero-garam.jpg" 
              alt="Garam Tedunan" 
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
              <span className="text-blue-400 font-medium">Garam Tedunan</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="text-blue-400 font-medium tracking-wide text-xs bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800 inline-block">
                Lebih dari Sekadar Garam
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Garam Tedunan
              </h1>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Garam Tedunan adalah garam rakyat yang dihasilkan secara tradisional oleh petani garam di pesisir Desa Tedunan. Dibuat dari air laut murni, diolah dengan panas matahari dan ketelatenan, menghasilkan kristal garam putih bersih yang alami dan berkualitas.
              </p>
            </div>
          </div>

          {/* 4 Card Fitur Melengkung di Bawah Hero */}
          <div className="relative z-20 max-w-6xl mx-auto px-6 -mb-10 pt-4">
            <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Waves size={24} /></div>
                <h3 className="font-bold text-sm">Alami</h3>
                <p className="text-xs text-gray-500">100% dari air laut tanpa bahan kimia</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Sun size={24} /></div>
                <h3 className="font-bold text-sm">Tradisional</h3>
                <p className="text-xs text-gray-500">Diproses dengan cara tradisional turun-temurun</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><ShieldCheck size={24} /></div>
                <h3 className="font-bold text-sm">Berkualitas</h3>
                <p className="text-xs text-gray-500">Kristal putih bersih dengan rasa gurih alami</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><HeartHandshake size={24} /></div>
                <h3 className="font-bold text-sm">Dari Petani Lokal</h3>
                <p className="text-xs text-gray-500">Dihasilkan oleh petani garam Desa Tedunan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 space-y-24">
          
          {/* Bagian Mengenal Garam Tedunan & Ciri Khas */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs">Mengenal Garam Tedunan</span>
              <h2 className="text-3xl font-bold text-gray-900">Apa itu Garam Tedunan?</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Garam Tedunan merupakan garam hasil produksi para petani garam di Desa Tedunan, Kecamatan Wedung, Kabupaten Demak. Garam ini dibuat dengan memanfaatkan sinar matahari dan angin laut yang optimal, tanpa bahan tambahan apapun.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dengan metode tradisional yang telah diwariskan secara turun-temurun, Garam Tedunan memiliki karakteristik kristal yang kering, bersih, dan memiliki rasa gurih alami yang khas.
              </p>
              <div>
                <Link 
                  href="#proses" 
                  className="inline-block bg-[#1e3a5f] hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium text-sm transition shadow"
                >
                  Lihat Proses Pembuatan
                </Link>
              </div>
            </div>

            {/* Card Ciri Khas dengan Background Tambak */}
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg border border-gray-200 flex items-center p-6">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/Dokumentasi 3.jpg" 
                  alt="Tambak Garam" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full space-y-4">
                <h3 className="font-bold text-gray-900 text-base">Ciri Khas Garam Tedunan</h3>
                <ul className="space-y-2.5 text-xs text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600 shrink-0" /> Kristal putih bersih dan kering</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600 shrink-0" /> Rasa gurih alami, tidak pahit</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600 shrink-0" /> Bebas dari bahan kimia</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600 shrink-0" /> Diproses secara higienis</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600 shrink-0" /> Dikeringkan alami oleh matahari</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Nilai Penting Garam bagi Masyarakat */}
          <section className="bg-blue-50/50 border border-blue-100 p-8 md:p-12 rounded-3xl space-y-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
                Nilai dan Peran
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Nilai Penting Garam bagi Masyarakat</h2>
              <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Utensils size={24} /></div>
                <h3 className="font-bold text-gray-900 text-base">Kebutuhan Sehari-hari</h3>
                <p className="text-xs text-gray-600">Garam merupakan bahan penting dalam memasak dan pengawetan makanan.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Activity size={24} /></div>
                <h3 className="font-bold text-gray-900 text-base">Menjaga Kesehatan</h3>
                <p className="text-xs text-gray-600">Mengandung mineral alami yang bermanfaat bagi tubuh dalam jumlah seimbang.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><Coins size={24} /></div>
                <h3 className="font-bold text-gray-900 text-base">Sumber Penghasilan</h3>
                <p className="text-xs text-gray-600">Menjadi mata pencaharian utama bagi banyak keluarga petani garam di Desa Tedunan.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center space-y-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mx-auto"><History size={24} /></div>
                <h3 className="font-bold text-gray-900 text-base">Warisan Tradisi</h3>
                <p className="text-xs text-gray-600">Produksi garam adalah tradisi turun-temurun yang menjadi bagian dari identitas desa.</p>
              </div>
            </div>
          </section>

          {/* Ketekunan di Balik Setiap Kristal (Statistik & Foto Samping) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs">Petani Garam Tedunan</span>
              <h2 className="text-3xl font-bold text-gray-900">Ketekunan di Balik Setiap Kristal</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Para petani garam Tedunan bekerja setiap hari dengan penuh ketekunan, menghadapi panas terik dan pasang surut air laut. Dari kerja keras mereka, lahirlah garam berkualitas yang menjadi kebanggaan desa.
              </p>
              
              {/* Statistik */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-600 font-bold text-lg"><Users size={20} /> ±120</div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-wider">Petani Garam Aktif</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-600 font-bold text-lg"><Maximize2 size={20} /> ±85 Ha</div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-wider">Luas Lahan Tambak</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-600 font-bold text-lg"><Calendar size={20} /> 5–6 Bulan</div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-wider">Musim Produksi/Tahun</p>
                </div>
              </div>
            </div>

            {/* Kolase Foto Kecil */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 col-span-2 rounded-2xl overflow-hidden shadow-md">
                <Image src="/images/hero-garam.jpg" alt="Petani Garam" fill className="object-cover" />
              </div>
              <div className="relative h-36 rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/garem-png.jpg" alt="Garam" fill className="object-cover" />
              </div>
              <div className="relative h-36 rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/Dokumentasi 7.jpg" alt="Aktivitas" fill className="object-cover" />
              </div>
            </div>
          </section>

          {/* Banner Bawah */}
          <section className="bg-[#112233] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">Garam Tedunan, Kebanggaan Kita Bersama</h3>
              <p className="text-gray-300 text-sm max-w-xl">
                Mari dukung dan lestarikan produksi garam tradisional Desa Tedunan agar terus berkembang dan memberi manfaat bagi generasi mendatang.
              </p>
            </div>
            <div>
              <Link 
                href="/#produk" 
                className="inline-flex items-center gap-2 bg-white text-[#112233] hover:bg-gray-100 font-medium px-6 py-3 rounded-xl shadow transition text-sm"
              >
                Jelajahi Produk Turunan <ArrowRight size={16} />
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