import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Download, PhoneCall, ExternalLink } from "lucide-react";

export default function InfografisGaleriPage() {
  const documents = [
    {
        title: "Leaflet Pembuatan Rumah Prisma",
        description:
        "Panduan mengenai pembuatan rumah prisma untuk menghasilkan garam mutiara.",
        file: "/documents/Leaflet%20Pembuatan%20Rumah%20Prisma.pdf",
    },
    {
        title: "Leaflet Pertolongan Pertama",
        description:
        "Panduan pertolongan pertama untuk membantu menjaga keselamatan dalam kegiatan kerja.",
        file: "/documents/Leaflet%20Pertolongan%20Pertama.pdf",
    },
    {
        title: "Poster SOP Gudang Garam",
        description:
        "Panduan standar operasional prosedur pengelolaan dan penyimpanan garam di gudang.",
        file: "/documents/Poster%20SOP%20Gudang%20Garam.pdf",
    },
    {
        title: "Leaflet Pembuatan Tahu Menggunakan Air Tua",
        description:
        "Informasi mengenai pemanfaatan air tua sebagai bagian dari inovasi produk pangan.",
        file: "/documents/Leaflet%20Pembuatan%20Tahu%20menggunakan%20air%20tua.pdf",
    },
    {
        title: "Booklet Pembuatan Garam Krosok Vanila",
        description:
        "Panduan pengembangan garam krosok dengan tambahan aroma vanilla sebagai produk bernilai tambah.",
        file: "/documents/Booklet%20Pembuatan%20Garam%20Krosok%20Vanila.pdf",
    },
    ];

  const galleryImages = [
    "/images/Dokumentasi 1.jpg",
    "/images/Dokumentasi 2.jpg",
    "/images/Dokumentasi 3.jpg",
    "/images/Dokumentasi 4.jpg",
    "/images/Dokumentasi 5.jpg",
    "/images/Dokumentasi 6.jpg",
    "/images/Dokumentasi 7.jpg",
    "/images/Dokumentasi 8.jpg",
    "/images/Dokumentasi 9.jpg",
    "/images/Dokumentasi 10.jpg",
    "/images/Dokumentasi 11.jpg",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[430px] overflow-hidden bg-[#0b1f38]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-garem.jpg"
            alt="Tambak Garam Tedunan"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a30]/95 via-[#0b1f38]/80 to-[#0b1f38]/35" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[430px] max-w-6xl items-center px-6 py-20">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-300">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Beranda
              </Link>

              <span>/</span>

              <span className="font-medium text-blue-300">
                Infografis & Galeri
              </span>
            </div>

            {/* Eyebrow */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Edukasi • Dokumentasi • Inspirasi
            </p>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Infografis & Galeri
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 md:text-lg">
              Kumpulan materi edukasi dan dokumentasi mengenai Garam Tedunan,
              mulai dari proses produksi, pengembangan produk turunan,
              pengelolaan garam, hingga berbagai kegiatan masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* =======================================================
            INFOGRAFIS
        ======================================================= */}
        <section>
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Koleksi Materi
            </p>

            <h2 className="text-3xl font-bold text-[#102d55] md:text-4xl">
              Unduh Infografis Edukatif
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
              Materi disusun untuk membantu masyarakat dan petani garam
              memperoleh informasi praktis mengenai proses produksi,
              pengelolaan garam, keselamatan kerja, hingga pengembangan
              produk turunan.
            </p>
          </div>

          {/* Document Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, index) => (
              <article
                key={doc.file}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* PDF Preview */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <iframe
                    src={`${doc.file}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={doc.title}
                    className="h-full w-full border-0"
                  />

                  {/* Number */}
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#123c70] text-xs font-bold text-white shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="flex min-h-[235px] flex-col p-5">
                  <h3 className="text-lg font-bold leading-6 text-[#102d55]">
                    {doc.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {doc.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-auto flex gap-2 pt-6">
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#123c70] px-4 py-2.5 text-sm font-semibold text-[#123c70] transition hover:bg-blue-50"
                    >
                      <ExternalLink size={16} />
                      Buka
                    </a>

                    <a
                      href={doc.file}
                      download
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#123c70] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d2e59]"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =======================================================
            DIVIDER
        ======================================================= */}
        <div className="my-24 h-px bg-gray-200" />

        {/* =======================================================
            GALERI
        ======================================================= */}
        <section>
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Dokumentasi Kegiatan
            </p>

            <h2 className="text-3xl font-bold text-[#102d55] md:text-4xl">
              Galeri Garam Tedunan
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
              Dokumentasi mengenai aktivitas petani, proses produksi,
              lingkungan tambak, hasil garam, dan berbagai kegiatan yang
              berkaitan dengan pengembangan potensi Garam Tedunan.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-2xl bg-gray-100 ${
                  index === 0
                    ? "col-span-2 row-span-2 aspect-square md:col-span-2 md:row-span-2"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`Dokumentasi Garam Tedunan ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-sm font-medium text-white transition duration-300 group-hover:translate-y-0">
                  Dokumentasi Garam Tedunan
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================
            CTA
        ======================================================= */}
        <section className="mt-24 overflow-hidden rounded-3xl bg-[#edf5ff]">
          <div className="flex flex-col items-center justify-between gap-8 px-8 py-10 md:flex-row md:px-12 md:py-12">

            <div className="max-w-xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">
                Materi Edukasi
              </p>

              <h3 className="text-2xl font-bold text-[#102d55] md:text-3xl">
                Ingin mendapatkan informasi lainnya?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Hubungi kami untuk mendapatkan informasi dan materi edukasi
                lainnya mengenai Garam Tedunan, proses produksi, maupun
                pengembangan produk turunannya.
              </p>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=6285157331787"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#123c70] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0d2e59]"
            >
              <PhoneCall size={17} />
              Hubungi Kami
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}