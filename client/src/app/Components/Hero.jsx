"use client";
import Link from "next/link";

const HeroTitle = ({ children }) => (
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
    {children}
  </h1>
);

const ActionButton = ({ href, variant = "primary", children, icon }) => {
  const baseClasses =
    "inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200",
    secondary:
      "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-lg",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {icon && <span className="mr-3 text-xl">{icon}</span>}
      {children}
    </Link>
  );
};

const StatsCard = ({ number, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-gray-900 mb-1">{number}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const FloatingCard = ({ className, icon, text, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    purple: "bg-purple-500 text-white",
  };

  return (
    <div
      className={`absolute ${className} ${colorClasses[color]} px-4 py-3 rounded-2xl text-sm font-medium shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
    >
      <span className="flex items-center">
        <span className="mr-2 text-lg">{icon}</span>
        {text}
      </span>
    </div>
  );
};

const HeroImage = () => (
  <div className="relative">
    <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2088&q=80"
        alt="Professional team collaborating on hiring process"
        className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl shadow-blue-200/50 object-cover aspect-[4/5]"
      />

      {/* Floating elements */}
      <FloatingCard
        className="-top-6 -right-6"
        icon="🎯"
        text="Smart Matching"
        color="blue"
      />

      <FloatingCard
        className="top-1/3 -left-8"
        icon="⚡"
        text="Instant Apply"
        color="green"
      />

      <FloatingCard
        className="-bottom-6 left-1/2 transform -translate-x-1/2"
        icon="🚀"
        text="Fast Hiring"
        color="purple"
      />
    </div>

    {/* Background decoration */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-6 scale-110 -z-10"></div>
  </div>
);

// ✅ Export all as default object
export default {
  HeroTitle,
  ActionButton,
  StatsCard,
  FloatingCard,
  HeroImage,
};
