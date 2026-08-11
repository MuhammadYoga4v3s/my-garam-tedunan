import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      title: "Tahu Air Tua",
      desc: "Olahan tahu unik yang menggunakan air tua (nigarin) dari hasil samping kristalisasi garam sebagai bahan pengganti pengental alami.",
      image: "/images/tahu-nigarin.jpg",
    },
    {
      title: "Garam Krosok Vanilla",
      desc: "Garam krosok murni dari pesisir Tedunan yang dikombinasikan dengan aroma vanilla pilihan untuk fungsi khusus.",
      image: "/images/garam krosok.jpg",
    },
    {
      title: "Rumah Prisma",
      desc: "Sarana atau bentuk inovasi tempat produksi dan pelindung kristalisasi garam rakyat di kawasan pesisir.",
      image: "/images/rumah prisma.jpg",
    },
    {
      title: "Salt Scrub",
      desc: "Produk perawatan tubuh dari butiran kristal garam halus yang berkhasiat membersihkan dan merevitalisasi kulit.",
      image: "/images/salt scrub.jpg",
    },
  ];

  return (
    <div className="space-y-8 my-16">
      {/* Header Bagian Produk */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
            Lebih dari Sekadar Garam
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Produk Turunan Garam</h2>
          <p className="text-gray-600 max-w-xl text-sm">
            Garam Tedunan memiliki banyak potensi pengembangan menjadi berbagai produk bernilai tambah yang bermanfaat bagi kehidupan sehari-hari.
          </p>
        </div>
        <div>
          <Link
            href="/produk-turunan"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-blue-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition shadow"
          >
            Jelajahi Produk Turunan <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Grid 4 Card Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col"
          >
            {/* Gambar Produk */}
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Keterangan */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed flex-grow">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}