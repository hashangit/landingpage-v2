"use client";

import { motion } from "framer-motion";
import { User, Car, Clock, MapPin, ArrowRight, Users } from "lucide-react";

export default function CapacityDiagram() {
  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visualising Capacity Unlocking</h2>
          <p className="text-gray-400 text-lg">
            See how HassleFreeCare transforms your existing workforce into a fully mobile, high-capacity team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before: Traditional Model */}
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">Traditional Model</span>
            </div>
            <h3 className="text-xl font-bold mb-8">The Mobility Bottleneck</h3>
            
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
                <div className="flex items-center gap-2 text-red-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-bold">Limited Service Radius</span>
                </div>
              </div>
            </div>
          </div>

          {/* After: HFC Model */}
          <div className="bg-brand-blue/20 rounded-3xl p-8 border border-brand-blue/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/20 px-3 py-1 rounded-full">HFC Infrastructure</span>
            </div>
            <h3 className="text-xl font-bold mb-8 text-white">Unlocking Full Potential</h3>

            <div className="relative">
              {/* Central Driver Node */}
              <div className="flex justify-center mb-12">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 bg-brand-teal rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(0,168,181,0.3)] relative z-10"
                >
                  <Car className="w-10 h-10 text-brand-navy" />
                </motion.div>
              </div>

              {/* Connecting Lines (simplified with CSS) */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent" />

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 bg-brand-blue/40 border border-brand-blue/50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs font-bold text-brand-teal">Carer {i}</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">Fully Mobile</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-2xl font-bold text-brand-teal">3x</p>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Efficiency</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-2xl font-bold text-brand-green">100%</p>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Mobility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
