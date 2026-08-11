import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";
import ProcessSection from "@/components/ProcessSection";
import ProductsSection from "@/components/ProductsSection";
import PdfSection from "@/components/PdfSection";
import GallerySection from "@/components/GallerySection"; // <-- Import Galeri
import Footer from "@/components/Footer"; // <-- Import Footer

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* Navbar Atas */}
        <Navbar />

        {/* Hero Section & Fitur */}
        <HeroSection />

        {/* Konten Utama Website */}
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
          <MainContent />
          <ProcessSection />
          <ProductsSection />
          <PdfSection />
          <GallerySection />
        </div>
      </div>

      {/* Footer / Kontak */}
      <Footer />
    </main>
  );
}