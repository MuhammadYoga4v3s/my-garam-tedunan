export default function MainContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      
      {/* Bagian Desa Tedunan & Potensi Garam */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition space-y-4">
        <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Potensi Desa
        </div>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Desa Tedunan & Potensi Garam
        </h2>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Desa Tedunan memiliki potensi kelautan dan pesisir yang luar biasa, dengan komoditas unggulan berupa garam rakyat berkualitas. Garam dari Desa Tedunan tidak hanya diproduksi untuk kebutuhan konsumsi harian, tetapi juga dikembangkan menjadi berbagai produk bernilai tambah tinggi.
        </p>
      </div>

      {/* Bagian Proses Pembuatan Garam */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition space-y-4">
        <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Metode Produksi
        </div>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Proses Pembuatan Garam
        </h2>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Proses produksi garam di Desa Tedunan mengandalkan metode kristalisasi air laut secara tradisional yang dikombinasikan dengan teknik modern, dipengaruhi oleh faktor cuaca, suhu, serta kualitas air laut demi menghasilkan kristal garam yang bersih dan bermutu tinggi.
        </p>
      </div>

      {/* Bagian Produk Turunan Garam */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition space-y-4">
        <div className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Hilirisasi Produk
        </div>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Produk Turunan Garam
        </h2>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Melalui inovasi dan pengolahan lanjutan, garam rakyat kini dapat diolah menjadi aneka produk turunan seperti garam spa, produk kecantikan, hingga komoditas pendukung industri lainnya.
        </p>
      </div>

    </div>
  );
}