import React from "react";
import { Workflow, Truck, BarChart3, ClipboardList, Timer, Lightbulb } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Approval Flow",
      description:
        "Streamlined approval process with automated workflows and notifications.",
      from: "hover:from-blue-500",
      to: "hover:to-black",
      icon: <Workflow className="w-8 h-8 mb-3" />,
    },
    {
      title: "Vendor Tracking",
      description:
        "View vendor performance with performance insights and ratings.",
      from: "hover:from-green-500",
      to: "hover:to-black",
      icon: <Truck className="w-8 h-8 mb-3" />,
    },
    {
      title: "Budget Analytics",
      description:
        "Real-time spending insights with budget monitoring and reporting.",
      from: "hover:from-purple-500",
      to: "hover:to-black",
      icon: <BarChart3 className="w-8 h-8 mb-3" />,
    },
    {
      title: "Request Management",
      description:
        "Built-in compliance checks and tools for all requests.",
      from: "hover:from-pink-500",
      to: "hover:to-black",
      icon: <ClipboardList className="w-8 h-8 mb-3" />,
    },
    {
      title: "Real-time Tracking",
      description:
        "Track orders from request to delivery in real time.",
      from: "hover:from-yellow-400",
      to: "hover:to-black", 
      icon: <Timer className="w-8 h-8 mb-3" />,
    },
    {
      title: "Smart Insights",
      description:
        "Use data to improve vendor relationships and cut costs.",
      from: "hover:from-blue-800",
      to: "hover:to-black",
      icon: <Lightbulb className="w-8 h-8 mb-3" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`bg-gray-50 p-6 rounded-xl shadow transition duration-300 
                      hover:bg-gradient-to-br ${feature.from} ${feature.to} hover:text-white`}
        >
          <div className="text-gray-800 hover:text-white transition duration-300">
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="opacity-90">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
