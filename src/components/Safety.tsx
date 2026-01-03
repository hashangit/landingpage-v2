import { ShieldCheck, UserCheck, Search, Database, Lock } from "lucide-react";

export default function Safety() {
  const points = [
    {
      title: "Vetted Drivers",
      description: "Every driver undergoes rigorous background checks and vetting before assignment.",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Verified Vehicles",
      description: "Insurance and maintenance records are checked per engagement for your peace of mind.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Audit Trail",
      description: "Clear logging of all shifts and confirmations ensures full accountability.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "GDPR Compliant",
      description: "All data is handled strictly in line with UK GDPR and data protection standards.",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-brand-blue font-bold uppercase tracking-wider text-sm mb-4">
              <ShieldCheck className="w-5 h-5" />
              <span>Trust & Assurance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Built With Care Environments in Mind
            </h2>
          </div>
          <p className="text-gray-600 md:max-w-xs text-sm">
            We understand the regulatory pressures of the care sector. Our service is designed to be a transparent, compliant extension of your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                {point.icon}
              </div>
              <h3 className="font-bold text-brand-navy mb-3">{point.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-navy rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-brand-teal" />
            </div>
            <div>
              <p className="text-xl font-bold">Safety is our standard</p>
              <p className="text-gray-400">Neutral to care delivery, dedicated to operational security.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 border border-white/20 rounded-lg text-xs font-bold uppercase tracking-widest text-white/60">
              UK GDPR
            </div>
            <div className="px-4 py-2 border border-white/20 rounded-lg text-xs font-bold uppercase tracking-widest text-white/60">
              VETTED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
