import { AlertCircle, Users, Clock, ShieldAlert } from "lucide-react";

export default function Problem() {
  const challenges = [
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Can't find enough driving carers?",
      description: "Recruiting carers who can drive is harder than ever. Don't let a lack of drivers limit how many people you can care for."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
      title: "Is your best talent stuck walking?",
      description: "Your skilled non-driving carers are limited to local walking rounds. We give them the mobility to work wherever they're needed."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-amber-500" />,
      title: "No more missed visits.",
      description: "Transport shouldn't be the reason a visit is missed. We provide the reliability you need to protect your reputation."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Stop worrying about cancellations.",
      description: "Your branch team shouldn't spend all day firefighting transport gaps. We handle the driving so you can handle the care."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            The Trouble with <span className="text-brand-blue">Finding Drivers</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Finding carers is hard enough. Finding carers who drive is even harder. We help you bridge the gap between the care you want to provide and the transport you need to get there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
