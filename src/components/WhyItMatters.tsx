import { TrendingUp, ShieldCheck, Zap, BarChart3, Minimize2 } from "lucide-react";

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
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Providers Choose <br /> This Model
            </h2>
            <p className="text-brand-teal font-medium text-lg mb-10">
              Reliability isn't just a goal—it's the foundation of care delivery. We provide the infrastructure to make it happen.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 bg-brand-teal/20 rounded-lg flex items-center justify-center text-brand-teal mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 text-brand-navy shadow-2xl">
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
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">Rota Stability</span>
                    <span className="text-sm font-bold text-brand-blue">+42%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue w-[85%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">Missed Visit Reduction</span>
                    <span className="text-sm font-bold text-brand-green">-60%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-green w-[75%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">Coordination Time Saved</span>
                    <span className="text-sm font-bold text-brand-teal">15 hrs/wk</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-teal w-[65%]" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-400 italic">
                  *Indicative results based on operational modeling for a standard 30-carer branch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
