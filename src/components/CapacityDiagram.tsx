"use client";

import { motion } from "framer-motion";
import { User, Car, Clock, MapPin, ArrowRight, Users } from "lucide-react";

export default function CapacityDiagram() {
  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See the Difference</h2>
          <p className="text-gray-400 text-lg">
            See how HassleFreeCare transforms your team, making every carer as mobile as a driver.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before: Traditional Model */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 rounded-3xl p-8 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">Before: Limited by transport</span>
            </div>
            <h3 className="text-xl font-bold mb-8">Isolated Carers</h3>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <p className="font-semibold mb-1">1 Driving Carer</p>
                  <p className="text-sm text-gray-400">Can cover wide areas but limited by their own schedule.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 opacity-40">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold mb-1">2 Non-Driving Carers</p>
                  <p className="text-sm text-gray-400">Restricted to local walking rounds. Capacity under-utilised.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-red-500/80">
                  <motion.div
                    animate={{ x: [-2, 2, -2] }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-4 h-4" />
                  </motion.div>
                  <span className="text-sm font-bold">Limited Service Radius</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* After: HFC Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-brand-blue/20 rounded-3xl p-8 border border-brand-blue/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 p-4">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/20 px-3 py-1 rounded-full border border-brand-teal/20">After: Every carer is mobile</span>
            </div>
            <h3 className="text-xl font-bold mb-8 text-white">Full Team Reliability</h3>

            <div className="relative">
              {/* Central Driver Node */}
              <div className="flex justify-center mb-12 relative">
                {/* Glow Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-x-0 mx-auto w-24 h-24 bg-brand-teal blur-2xl rounded-full"
                />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.2 }
                  }}
                  className="w-20 h-20 bg-brand-teal rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(0,168,181,0.4)] relative z-10 border border-white/20"
                >
                  <Car className="w-10 h-10 text-brand-navy" />
                </motion.div>
              </div>

              {/* Animated Flow Paths */}
              <div className="absolute top-[80px] left-0 w-full h-24 pointer-events-none -mt-4">
                <svg width="100%" height="100%" viewBox="0 0 400 100" fill="none" preserveAspectRatio="none">
                  {/* Left Path */}
                  <motion.path
                    d="M 200 0 L 66 100"
                    stroke="url(#gradient-line)"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    animate={{ strokeDashoffset: [-30, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Middle Path */}
                  <motion.path
                    d="M 200 0 L 200 100"
                    stroke="url(#gradient-line)"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    animate={{ strokeDashoffset: [-30, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Right Path */}
                  <motion.path
                    d="M 200 0 L 334 100"
                    stroke="url(#gradient-line)"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    animate={{ strokeDashoffset: [-30, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="gradient-line" x1="200" y1="0" x2="200" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00A8B5" stopOpacity="0.8" />
                      <stop offset="1" stopColor="#00A8B5" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-4 relative z-10">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="text-center group/carer"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="w-14 h-14 bg-brand-blue/40 border border-brand-blue/50 rounded-full flex items-center justify-center mx-auto mb-3 relative group-hover/carer:border-brand-teal/50 transition-colors"
                      animate={{ boxShadow: ["0 0 0px rgba(0,168,181,0)", "0 0 15px rgba(0,168,181,0.2)", "0 0 0px rgba(0,168,181,0)"] }}
                      transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    >
                      <User className="w-7 h-7 text-white group-hover/carer:text-brand-teal transition-colors" />
                    </motion.div>
                    <p className="text-xs font-bold text-brand-teal">Carer {i}</p>
                    <motion.p
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter"
                    >
                      Fully Mobile
                    </motion.p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileInView={{ scale: [0.9, 1.05, 1] }}
                    className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-teal/30 transition-colors"
                  >
                    <div className="flex items-baseline gap-1">
                      <p className="text-2xl font-bold text-brand-teal">3x</p>
                      <span className="text-[10px] text-brand-teal/60 font-bold">▲</span>
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Efficiency</p>
                  </motion.div>
                  <motion.div
                    whileInView={{ scale: [0.9, 1.05, 1] }}
                    className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-green/30 transition-colors"
                  >
                    <div className="flex items-baseline gap-1">
                      <p className="text-2xl font-bold text-brand-green">100%</p>
                      <span className="text-[10px] text-brand-green/60 font-bold">▲</span>
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Mobility</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 p-8 rounded-2xl border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-medium">
              Expand your service radius beyond walking distance
            </p>
          </div>
          <ArrowRight className="hidden md:block w-5 h-5 text-gray-600" />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-brand-navy" />
            </div>
            <p className="text-sm font-medium">
              Make every carer in your team a mobile carer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
