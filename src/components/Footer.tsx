import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";

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
            <li><a href="#" className="hover:text-white transition">Beranda</a></li>
            <li><a href="#" className="hover:text-white transition">Tentang Tedunan</a></li>
            <li><a href="#" className="hover:text-white transition">Proses Pembuatan</a></li>
            <li><a href="#" className="hover:text-white transition">Produk Turunan</a></li>
            <li><a href="#" className="hover:text-white transition">Infografis & Galeri</a></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak Kami */}
        <div className="space-y-4" id="kontak-kami">
          <h3 className="font-bold text-lg text-blue-400">Kontak Kami</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
              <span>Desa Tedunan, Kecamatan Wedung, Kabupaten Demak, Jawa Tengah.</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400 shrink-0" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <span>info@garamtedunan.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Garam Tedunan, Kabupaten Demak. All rights reserved.
      </div>
    </footer>
  );
}