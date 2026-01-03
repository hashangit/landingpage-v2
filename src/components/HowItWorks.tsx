import { ClipboardCheck, UserCheck, Smartphone, CheckCircle } from "lucide-react";

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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">How It Works</h2>
          <p className="text-lg text-gray-600">
            A simple, integrated process designed to support your existing operations without adding complexity.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-gray-50 rounded-2xl shadow-sm flex items-center justify-center text-brand-blue mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
