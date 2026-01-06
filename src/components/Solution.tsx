"use client";
import { Car, Network, Settings, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Solution() {
  const features = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Driver + Vehicle Support",
      description: "Dedicated transport infrastructure aligned directly to your existing care rotas."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Multi-Carer Efficiency",
      description: "Designed for operational scale, enabling multiple carers to reach service users reliably."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Works alongside your current scheduling and care systems without requiring changes."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Coverage",
      description: "Supports both planned rota stability and exceptional coverage requirements."
    }
  ];

  return (
    <section id="solution" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-brand-teal font-bold uppercase tracking-wider text-sm mb-4 block">
              The HassleFreeCare Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8 leading-tight">
              We provide the car and the driver. <br /> You provide the carer.
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              HassleFreeCare fits right into your existing schedule. We provide dedicated drivers and vehicles to get your non-driving carers to their visits, on time, every time.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Car className="w-6 h-6" />,
                  title: "Driver + Vehicle Support",
                  description: "A professional driver and reliable vehicle assigned to your care rotas."
                },
                {
                  icon: <Network className="w-6 h-6" />,
                  title: "Get more done",
                  description: "Enable your existing team to cover more visits without needing to hire more drivers."
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Fits your schedule",
                  description: "Works alongside your current scheduling system without any complicated changes."
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Reliable transport",
                  description: "Fixed transport routes that ensure every visit is reached as planned."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-gray-100"
            >
              <div className="bg-brand-navy rounded-2xl p-8 text-white aspect-[4/3] flex flex-col justify-between overflow-hidden">
                <div>
                  <h4 className="text-2xl font-bold mb-2">Stable Rota Delivery</h4>
                  <p className="text-gray-400">Operational visibility at every step.</p>
                </div>

                <div className="space-y-4">
                  {[
                    { status: "Driver En-route", time: "14:20", color: "bg-brand-green", pulse: true },
                    { status: "Carer Pick-up Confirmed", time: "14:35", color: "bg-brand-teal", pulse: false },
                    { status: "Visit 1: On-time Delivery", time: "14:50", color: "bg-white", active: true }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + (0.2 * i) }}
                      className={`${item.active ? 'bg-brand-blue/40 border border-brand-blue/50' : 'bg-white/10'} p-4 rounded-xl flex items-center justify-between`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.color} ${item.pulse ? 'animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]' : ''}`} />
                        <span className="text-sm font-medium">{item.status}</span>
                      </div>
                      <span className={`text-xs ${item.active ? 'text-white/70' : 'text-gray-400'}`}>{item.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative background element */}
            <motion.div
              animate={{ rotate: [3, 5, 3], scale: [1, 1.02, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-full h-full bg-brand-teal/5 rounded-3xl -z-10 transform"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-blue/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
