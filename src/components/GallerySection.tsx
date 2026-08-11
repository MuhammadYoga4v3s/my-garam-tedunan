import Image from "next/image";
import { Camera } from "lucide-react";

export default function GallerySection() {
  // Mengambil beberapa foto dokumentasi yang ada di folder public/images
  const galleryImages = [
    "/images/Dokumentasi 1.jpg",
    "/images/Dokumentasi 2.jpg",
    "/images/Dokumentasi 3.jpg",
    "/images/Dokumentasi 4.jpg",
    "/images/Dokumentasi 5.jpg",
    "/images/Dokumentasi 6.jpg",
  ];

  return (
    <section className="space-y-8" id="galeri">
      {/* Header Galeri */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
            Dokumentasi Kegiatan
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Galeri Garam Tedunan</h2>
          <p className="text-gray-600 max-w-xl text-sm">
            Kehidupan, proses, dan potensi dalam setiap momen di kawasan pesisir Desa Tedunan.
          </p>
        </div>
      </div>

      {/* Grid Foto Galeri */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="relative h-40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group bg-gray-100 border border-gray-200"
          >
            <Image
              src={src}
              alt={`Dokumentasi ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}