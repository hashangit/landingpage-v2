import { AlertCircle, Users, Clock, ShieldAlert } from "lucide-react";

export default function Problem() {
  const challenges = [
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Recruitment Scarcity",
      description: "Driving care workers are increasingly difficult to recruit, limiting your service capacity and growth potential."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
      title: "Under-utilised Talent",
      description: "Skilled non-driving carers are often restricted to local walking rounds, leaving their full potential untapped."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-amber-500" />,
      title: "Compliance Risks",
      description: "Missed or delayed visits don't just affect care quality—they impact your reputation and regulatory standing."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Coordination Stress",
      description: "Branch teams spend hours 'firefighting' last-minute mobility gaps instead of focusing on care quality."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            The Challenge Facing <span className="text-brand-blue">Home Care Providers</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The growing mismatch between care demand and the availability of driving care workers is creating a critical operational bottleneck.
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
