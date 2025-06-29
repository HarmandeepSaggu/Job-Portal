'use client';

import React from 'react';

const FormSection = ({ title, children, icon }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-blue-50 rounded-lg">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

export default FormSection;