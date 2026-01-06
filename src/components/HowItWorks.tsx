"use client";
import { ClipboardCheck, UserCheck, Smartphone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Confirm Requirements",
      description: "You confirm your driver and transport support needs based on your upcoming rota."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Driver Assignment",
      description: "HassleFreeCare assigns a vetted, professional driver and vehicle to your branch."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Direct Coordination",
      description: "Drivers coordinate directly with your carers for on-time pick-ups and drops."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Logged Delivery",
      description: "Shift delivery is confirmed and logged for your records and audit trail."
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">How It Works</h2>
          <p className="text-lg text-gray-600">
            A simple, integrated process designed to support your existing operations without adding complexity.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (SVG for drawing effect) */}
          <div className="hidden lg:block absolute top-[32px] left-0 w-full h-[2px] -z-10 px-[12.5%]">
            <svg width="100%" height="2" viewBox="0 0 100 2" fill="none" className="overflow-visible" preserveAspectRatio="none">
              <motion.path
                d="M 0 1 H 100"
                stroke="#E5E7EB"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white border-4 border-gray-50 rounded-2xl shadow-sm flex items-center justify-center text-brand-blue mb-6 relative transition-colors group-hover:border-brand-teal/20"
                >
                  {step.icon}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.2), type: "spring" }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white"
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
