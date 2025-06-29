"use client";
import React from 'react';
import { 
  FaSearch, 
  FaUsers, 
  FaRocket, 
  FaShieldAlt 
} from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: "Smart Job Search",
      description: "Advanced search filters to find jobs that match your skills and preferences perfectly."
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Direct Employer Connect",
      description: "Connect directly with hiring managers and recruiters from top companies."
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Career Growth",
      description: "Access resources, courses, and tools to accelerate your professional development."
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure & Private",
      description: "Your personal information is protected with enterprise-grade security measures."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose JobPortal?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to helping you find the perfect job match with our innovative platform and personalized approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;