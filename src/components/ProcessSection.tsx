import { Waves, Sun, Droplets, Sparkles, ShoppingBag } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Air Laut",
      desc: "Air laut bersih dialirkan ke petakan tambak.",
      icon: <Waves className="w-6 h-6 text-blue-600" />
    },
    {
      number: "02",
      title: "Penguapan",
      desc: "Sinar matahari dan angin menguapkan air secara alami.",
      icon: <Sun className="w-6 h-6 text-blue-600" />
    },
    {
      number: "03",
      title: "Pemekatan",
      desc: "Kadar garam meningkat seiring berkurangnya volume air.",
      icon: <Droplets className="w-6 h-6 text-blue-600" />
    },
    {
      number: "04",
      title: "Kristalisasi",
      desc: "Kristal garam mulai terbentuk di permukaan tambak.",
      icon: <Sparkles className="w-6 h-6 text-blue-600" />
    },
    {
      number: "05",
      title: "Panen",
      desc: "Garam dipanen, dicuci, dikeringkan, dan siap digunakan.",
      icon: <ShoppingBag className="w-6 h-6 text-blue-600" />
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50/50 to-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm my-12">
      <div className="text-center space-y-3 mb-12">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
          Dari Laut Menjadi Kristal
        </span>
        <h2 className="text-3xl font-bold text-gray-900">Proses Pembuatan Garam</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm">
          Perjalanan alami yang penuh ketekunan dan kesabaran.
        </p>
      </div>

      {/* Grid 5 Tahapan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative group hover:shadow-md transition">
            <span className="absolute top-4 right-4 text-xs font-bold text-blue-200">
              {step.number}
            </span>
            <div className="p-3 bg-blue-50 rounded-2xl mb-4 group-hover:scale-110 transition">
              {step.icon}
            </div>
            <h3 className="font-bold text-gray-800 mb-1 text-base">{step.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}