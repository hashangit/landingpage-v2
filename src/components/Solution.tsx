"use client";
import { Car, Network, Settings, Target } from "lucide-react";
import { motion } from "framer-motion";
import OptimizedRota from "./OptimizedRota";

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
            className="lg:w-1/2 relative min-h-[400px]"
          >
            <OptimizedRota />
          </motion.div>

          {/* Decorative background element */}
          <motion.div
            animate={{ rotate: [3, 5, 3], scale: [1, 1.02, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-full h-full bg-brand-teal/5 rounded-3xl -z-10 transform"
          />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-blue/10 rounded-full blur-xl" />
        </div>
      </div>
    </section>
  );
}
