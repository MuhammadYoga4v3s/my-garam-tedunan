"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Tedunan", href: "/tentang-tedunan" },
    { name: "Garam Tedunan", href: "/garam-tedunan" },
    { name: "Proses Pembuatan", href: "/proses-pembuatan" },
    { name: "Produk Turunan", href: "/produk-turunan" },
    { name: "Infografis & Galeri", href: "/infografis-galeri" },
  ];

  return (
    <nav className="w-full bg-[#1e3a5f]/90 backdrop-blur-md text-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 bg-white rounded-full overflow-hidden p-1">
            <Image src="/images/logoKKN.png" alt="Logo" fill className="object-contain" />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-lg tracking-wide block">GARAM TEDUNAN</span>
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {links.map(link => (
            <Link key={link.name} href={link.href} className="hover:text-blue-300 transition">{link.name}</Link>
          ))}
          <a href="https://api.whatsapp.com/send?phone=6285157331787" target="_blank" className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-sm font-medium transition">
            <PhoneCall size={16} /> Kontak Kami
          </a>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4 py-4 border-t border-blue-800 text-sm font-medium">
          {links.map(link => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-blue-300 transition">
              {link.name}
            </Link>
          ))}
          <a href="https://api.whatsapp.com/send?phone=6285157331787" target="_blank" className="flex items-center justify-center gap-2 bg-blue-600 py-3 rounded-xl transition">
            <PhoneCall size={16} /> Kontak Kami
          </a>
        </div>
      )}
    </nav>
  );
}