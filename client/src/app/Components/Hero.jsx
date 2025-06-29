'use client';
import Link from 'next/link';

// Modular components
const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-70 blur-3xl"></div>
    <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-70 blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
  </div>
);

const HeroBadge = ({ children }) => (
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
    {children}
  </div>
);

const HeroTitle = ({ children }) => (
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
    {children}
  </h1>
);

const HeroDescription = ({ children }) => (
  <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed font-light">
    {children}
  </p>
);

const ActionButton = ({ href, variant = 'primary', children, icon }) => {
  const baseClasses = "inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200",
    secondary: "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-lg"
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
    purple: "bg-purple-500 text-white"
  };

  return (
    <div className={`absolute ${className} ${colorClasses[color]} px-4 py-3 rounded-2xl text-sm font-medium shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm`}>
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

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <HeroBadge>
              🌟 #1 Job Portal Platform
            </HeroBadge>
            
            <HeroTitle>
              Connect Top <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Talent</span> with Dream <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Opportunities</span>
            </HeroTitle>
            
            <HeroDescription>
              Experience the future of recruitment with our AI-powered platform. Streamline your hiring process, discover exceptional talent, and build teams that drive success.
            </HeroDescription>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <ActionButton href="/jobs" variant="primary" icon="🚀">
                Find Jobs
              </ActionButton>
              <ActionButton href="/demo" variant="secondary" icon="▶️">
                Watch Demo
              </ActionButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <StatsCard number="25K+" label="Active Jobs" />
              <StatsCard number="100K+" label="Candidates" />
              <StatsCard number="5K+" label="Companies" />
            </div>
          </div>
          
          {/* Image Column */}
          <div className="lg:pl-8">
            <HeroImage />
          </div>
        </div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
    </section>
  );
}