"use client";
import { ShieldCheck, UserCheck, Search, Database, Lock } from "lucide-react";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 text-brand-blue font-bold uppercase tracking-wider text-sm mb-4">
              <ShieldCheck className="w-5 h-5" />
              <span>Trust & Assurance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
              Built With Care Environments in Mind
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 md:max-w-xs text-sm"
          >
            We understand the regulatory pressures of the care sector. Our service is designed to be a transparent, compliant extension of your team.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-blue mb-6">
                {point.icon}
              </div>
              <h3 className="font-bold text-brand-navy mb-3">{point.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-brand-navy rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="flex items-center gap-6 relative z-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/10"
            >
              <ShieldCheck className="w-8 h-8 text-brand-teal" />
            </motion.div>
            <div>
              <p className="text-xl font-bold">Safety is our standard</p>
              <p className="text-gray-400">Neutral to care delivery, dedicated to operational security.</p>
            </div>
          </div>
          <div className="flex gap-4 relative z-10">
            {["UK GDPR", "VETTED"].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                className="px-4 py-2 border border-white/20 rounded-lg text-xs font-bold uppercase tracking-widest text-white/60 hover:border-brand-teal/50 transition-colors"
              >
                {badge}
              </motion.div>
            ))}
          </div>
          {/* Decorative pulse background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 blur-3xl -z-0" />
        </motion.div>
      </div>
    </section>
  );
}
