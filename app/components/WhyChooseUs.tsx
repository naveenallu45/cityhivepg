import React from 'react';
import { FaWifi, FaMapMarkerAlt, FaShieldAlt, FaBed, FaSnowflake, FaUsers } from 'react-icons/fa';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: FaMapMarkerAlt,
      title: 'Prime Location',
      description: 'Located just 1km from major IT hubs, making your daily commute convenient and time-saving.',
      bgColor: 'bg-purple-100',
      iconBg: 'bg-purple-600',
    },
    {
      icon: FaWifi,
      title: '24/7 High-Speed Wi-Fi',
      description: 'Stay connected with uninterrupted high-speed internet for work, entertainment, and staying in touch.',
      bgColor: 'bg-blue-100',
      iconBg: 'bg-blue-600',
    },
    {
      icon: FaShieldAlt,
      title: 'Safe & Secure',
      description: 'New building with modern security systems ensuring a safe and secure living environment for all residents.',
      bgColor: 'bg-green-100',
      iconBg: 'bg-green-600',
    },
    {
      icon: FaBed,
      title: 'Comfortable Living',
      description: 'Premium spring beds, spacious cupboards, and well-maintained rooms for a comfortable stay.',
      bgColor: 'bg-orange-100',
      iconBg: 'bg-orange-600',
    },
    {
      icon: FaSnowflake,
      title: 'AC & Non-AC Options',
      description: 'Choose between air-conditioned or non-AC rooms based on your preference and budget.',
      bgColor: 'bg-yellow-100',
      iconBg: 'bg-yellow-600',
    },
    {
      icon: FaUsers,
      title: 'Ideal for Professionals',
      description: 'Perfect living space designed for working professionals seeking comfort, convenience, and community.',
      bgColor: 'bg-pink-100',
      iconBg: 'bg-pink-600',
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20 bg-orange-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose{' '}
            <span className="text-purple-600">Cityhive PG</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience premium living with modern amenities and unmatched convenience for working professionals.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className={`w-16 h-16 ${reason.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <reason.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
