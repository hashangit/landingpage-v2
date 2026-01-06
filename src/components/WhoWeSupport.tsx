"use client";
import { motion } from "framer-motion";
export default function WhoWeSupport() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-brand-blue/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full translate-x-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
          </motion.div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-8"
            >
              Who We Support
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-700 leading-relaxed mb-12"
            >
              We work with care providers of all sizes — especially if your carers struggle to get between visits.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { title: "Single Branch", desc: "Make your local rota reliable" },
                { title: "Regional Groups", desc: "Connect your care teams" },
                { title: "National Providers", desc: "Scale across all your branches" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}
                  className="p-6 bg-white rounded-2xl shadow-sm transition-all"
                >
                  <p className="font-bold text-brand-blue">{item.title}</p>
                  <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
