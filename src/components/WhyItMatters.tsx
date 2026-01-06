"use client";
import { TrendingUp, ShieldCheck, Zap, BarChart3, Minimize2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyItMatters() {
  const benefits = [
    {
      title: "Make the most of every carer",
      description: "Non-drivers can now reach any visit, just like your driving staff.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "No more driver dependency",
      description: "Grow your service even if you can't find enough carers who drive.",
      icon: <Minimize2 className="w-5 h-5" />
    },
    {
      title: "Reliable visits, every day",
      description: "Stop worrying about transport and focus on delivering great care.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Grow without the headache",
      description: "Expand your team and your service area without hiring more drivers.",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 -mr-24" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Providers Choose <br /> This Model
            </h2>
            <p className="text-brand-teal font-medium text-lg mb-10">
              Reliability isn&apos;t just a goal—it&apos;s the foundation of care delivery. We provide the infrastructure to make it happen.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 cursor-default transition-colors"
                >
                  <div className="w-10 h-10 bg-brand-teal/20 rounded-lg flex items-center justify-center text-brand-teal mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-3xl p-8 text-brand-navy shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-brand-blue/10 rounded-xl">
                  <BarChart3 className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-navy">Operational Impact</h4>
                  <p className="text-sm text-gray-500">Measurable stability for your branch.</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Rota Stability", value: "+42%", width: "85%", color: "bg-brand-blue" },
                  { label: "Missed Visit Reduction", value: "-60%", width: "75%", color: "bg-brand-green" },
                  { label: "Coordination Time Saved", value: "15 hrs/wk", width: "65%", color: "bg-brand-teal" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold">{stat.label}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 + (i * 0.2) }}
                        className={`text-sm font-bold ${stat.color.replace('bg-', 'text-')}`}
                      >
                        {stat.value}
                      </motion.span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                        className={`h-full ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-400 italic">
                  *Indicative results based on operational modeling for a standard 30-carer branch.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
