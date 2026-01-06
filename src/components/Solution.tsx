import { Car, Network, Settings, Target } from "lucide-react";

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
          <div className="lg:w-1/2">
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
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-gray-100">
              <div className="bg-brand-navy rounded-2xl p-8 text-white aspect-[4/3] flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold mb-2">Stable Rota Delivery</h4>
                  <p className="text-gray-400">Operational visibility at every step.</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                      <span className="text-sm font-medium">Driver En-route</span>
                    </div>
                    <span className="text-xs text-gray-400">14:20</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-teal" />
                      <span className="text-sm font-medium">Carer Pick-up Confirmed</span>
                    </div>
                    <span className="text-xs text-gray-400">14:35</span>
                  </div>
                  <div className="bg-brand-blue/40 border border-brand-blue/50 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-sm font-medium">Visit 1: On-time Delivery</span>
                    </div>
                    <span className="text-xs text-white/70">14:50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-brand-teal/5 rounded-3xl -z-10 transform rotate-3" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-blue/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
