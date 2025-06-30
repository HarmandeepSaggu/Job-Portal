'use client';
import FeaturesSection from "./Components/FeatureSection";
import Components from "./Components/Hero";

export default function HomePage() {
  const { HeroTitle, ActionButton, StatsCard, HeroImage } = Components;

  return (
    <div>
      <main className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden">
        {/* Optional: Add Hero Background from your HeroSection */}
        {/* <HeroBackground /> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <HeroTitle>
                Connect Top{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Talent
                </span>{' '}
                with Dream{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Opportunities
                </span>
              </HeroTitle>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience the future of recruitment with our AI-powered platform. Streamline your hiring process, discover exceptional talent, and build teams that drive success.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <ActionButton href="/jobs" icon="🚀">Find Jobs</ActionButton>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200 max-w-md mx-auto lg:mx-0">
                <StatsCard number="25K+" label="Active Jobs" />
                <StatsCard number="100K+" label="Candidates" />
                <StatsCard number="5K+" label="Companies" />
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:pl-8 mt-10 lg:mt-0">
              <HeroImage />
            </div>
          </div>
        </div>
      </main>

      <FeaturesSection />
    </div>
  );
}
