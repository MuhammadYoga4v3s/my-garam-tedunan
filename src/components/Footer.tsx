import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-[#112233] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Kolom 1: Identitas */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-white rounded-full overflow-hidden p-1 shadow">
              <Image 
                src="/images/logoKKN.png" 
                alt="Logo Garam Tedunan" 
                fill 
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-bold text-lg tracking-wide block">GARAM TEDUNAN</span>
              <span className="text-xs text-gray-400 tracking-wider uppercase">Kabupaten Demak</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Pusat informasi potensi pesisir, proses produksi garam rakyat, dan pengembangan produk turunan bernilai tambah di Desa Tedunan.
          </p>
        </div>

        {/* Kolom 2: Tautan Cepat */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-blue-400">Tautan Cepat</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Beranda</Link></li>
            <li><Link href="/tentang-tedunan" className="hover:text-white transition">Tentang Tedunan</Link></li>
            <li><Link href="/garam-tedunan" className="hover:text-white transition">Garam Tedunan</Link></li>
            <li><Link href="/proses-pembuatan" className="hover:text-white transition">Proses Pembuatan</Link></li>
            <li><Link href="/produk-turunan" className="hover:text-white transition">Produk Turunan</Link></li>
            <li><Link href="/infografis-galeri" className="hover:text-white transition">Infografis & Galeri</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak Kami */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-blue-400">Kontak Kami</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
              <span>Desa Tedunan, Kecamatan Wedung, Kabupaten Demak, Jawa Tengah.</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400 shrink-0" />
              <a href="https://api.whatsapp.com/send?phone=6285157331787" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +62 851-5733-1787
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <a href="mailto:desa.tedunan17@gmail.com" className="hover:underline">
                desa.tedunan17@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={18} className="text-blue-400 shrink-0" />
              <a href="https://tedunan-wedung.desa.id/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                tedunan-wedung.desa.id
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
        <div className="max-w-6xl mx-auto px-6 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Pemerintah Desa Tedunan. | Developed by KKN-T Undip 88 2026.
        </div>
    </footer>
  );
}