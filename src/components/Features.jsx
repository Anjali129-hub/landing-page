import { Rocket, Cpu, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Fast & Scalable",
      desc: "Optimized solutions designed to grow with your business.",
      icon: <Rocket className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Modern Technology",
      desc: "Built using the latest frameworks and best practices.",
      icon: <Cpu className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "Secure & Reliable",
      desc: "Security-first development to protect your data.",
      icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-14">
          Our <span className="text-indigo-600">Features</span>
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-5">
                {feature.icon}
              </div>

              <h4 className="text-xl font-semibold mb-3">
                {feature.title}
              </h4>

              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
