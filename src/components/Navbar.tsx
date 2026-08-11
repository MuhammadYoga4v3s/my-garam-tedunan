import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1e3a5f]/90 backdrop-blur-md text-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-md">
      {/* Logo & Nama */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 bg-white rounded-full overflow-hidden p-1 shadow">
          <Image 
            src="/images/logoKKN.png" 
            alt="Logo Garam Tedunan" 
            fill 
            className="object-contain"
          />
        </div>
        <div className="leading-tight">
          <span className="font-bold text-lg tracking-wide block">GARAM TEDUNAN</span>
          <span className="text-[10px] text-gray-300 tracking-wider uppercase">Kabupaten Demak</span>
        </div>
      </div>

      {/* Menu Links */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <Link href="#" className="hover:text-blue-300 transition">Beranda</Link>
        <Link href="/tentang-tedunan" className="hover:text-blue-300 transition">Tentang Tedunan</Link>
        <Link href="/garam-tedunan" className="hover:text-blue-300 transition">Garam Tedunan</Link>
        <Link href="/proses-pembuatan" className="hover:text-blue-300 transition">Proses Pembuatan</Link>
        <Link href="#" className="hover:text-blue-300 transition">Produk Turunan</Link>
        <Link href="#" className="hover:text-blue-300 transition">Infografis & Galeri</Link>
      </div>

      {/* Tombol Kontak */}
      <div>
        <a 
          href="#kontak" 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow transition"
        >
          <PhoneCall size={16} /> Kontak Kami
        </a>
      </div>
    </nav>
  );
}