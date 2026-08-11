import { FileText, Download, ExternalLink } from "lucide-react";

export default function PdfSection() {
  return (
    <section className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 shadow-sm">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Pelajari Lebih Lanjut</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Garam tidak hanya berhenti sebagai komoditas bahan pangan. Infografis ini menyajikan gambaran mengenai potensi pemanfaatan dan pengembangan produk turunan berbasis garam[cite: 1].
        </p>
      </div>

      {/* Card PDF */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            Format: PDF
          </span>
          <h3 className="text-xl font-semibold mt-2">Infografis Produk Turunan Garam</h3>
          <p className="text-sm text-gray-500">
            Eksplorasi potensi pemanfaatan garam menjadi berbagai produk bernilai tambah[cite: 1].
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <a
            href="/documents/infografis-produk-turunan-garam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            <ExternalLink size={16} /> Buka PDF
          </a>
          <a
            href="/documents/infografis-produk-turunan-garam.pdf"
            download
            className="flex-1 md:flex-none text-center border border-gray-300 hover:bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            <Download size={16} /> Download
          </a>
        </div>
      </div>
    </section>
  );
}