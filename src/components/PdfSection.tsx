import Link from "next/link";
import { FileText, Download, ExternalLink, ArrowRight } from "lucide-react";

export default function PdfSection() {
  const samplePdf = "/documents/Leaflet%20Pembuatan%20Tahu%20menggunakan%20air%20tua.pdf";

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 space-y-6 shadow-sm my-16">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          Dokumen & Panduan
        </span>
        <h2 className="text-3xl font-bold text-gray-900">Pelajari Lebih Lanjut</h2>
        <p className="text-gray-600 text-sm">
          Garam tidak hanya berhenti sebagai komoditas bahan pangan. Temukan berbagai infografis panduan praktis dan materi edukasi lengkap di halaman khusus infografis kami.
        </p>
      </div>

      {/* Card Sampel PDF */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">
            Sampel Panduan PDF
          </span>
          <h3 className="text-xl font-bold text-gray-900 pt-1">Leaflet Pembuatan Tahu Menggunakan Air Tua</h3>
          <p className="text-xs text-gray-500 leading-relaxed max-w-lg">
            Informasi mengenai pemanfaatan air tua (nigarin) sebagai bagian dari inovasi produk pangan sehat bernilai tambah di Desa Tedunan.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <a
            href={samplePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2 shadow-sm"
          >
            <ExternalLink size={16} /> Buka PDF
          </a>
          <a
            href={samplePdf}
            download
            className="flex-1 md:flex-none text-center border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2"
          >
            <Download size={16} /> Download
          </a>
        </div>
      </div>

      {/* Tombol Menuju Halaman Infografis & Galeri */}
      <div className="text-center pt-2">
        <Link
          href="/infografis-galeri"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition"
        >
          Lihat Semua Koleksi Infografis & Galeri Lengkap <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}