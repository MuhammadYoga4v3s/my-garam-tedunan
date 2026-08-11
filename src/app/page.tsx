import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PdfSection from "@/components/PdfSection";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Navbar Atas */}
      <Navbar />

      {/* Hero Section & Fitur */}
      <HeroSection />

      {/* Konten & Section PDF Sebelumnya */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <MainContent />
        <PdfSection />
      </div>
    </main>
  );
}