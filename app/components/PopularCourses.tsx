import React from 'react';
import { FaUser, FaUsers, FaBed, FaHome } from 'react-icons/fa';

export default function PopularCourses() {
  const roomTypes = [
    {
      title: 'Single Sharing',
      price: '₹23,000',
      priceLabel: 'per month',
      description: 'Private room for maximum comfort and privacy',
      icon: FaUser,
      iconBg: 'bg-purple-500',
      cardBg: 'bg-purple-50',
      badge: 'Premium',
    },
    {
      title: 'Double Sharing',
      price: '₹12,000',
      priceLabel: 'per month',
      description: 'Comfortable room shared with one roommate',
      icon: FaUsers,
      iconBg: 'bg-blue-500',
      cardBg: 'bg-blue-50',
      badge: 'Popular',
    },
    {
      title: 'Triple Sharing',
      price: '₹9,000',
      priceLabel: 'per month',
      description: 'Spacious room shared with two roommates',
      icon: FaBed,
      iconBg: 'bg-green-500',
      cardBg: 'bg-green-50',
      badge: 'Value',
    },
    {
      title: 'Four Sharing',
      price: '₹8,000',
      priceLabel: 'per month',
      description: 'Budget-friendly option with three roommates',
      icon: FaHome,
      iconBg: 'bg-orange-500',
      cardBg: 'bg-orange-50',
      badge: 'Economy',
    },
  ];

  return (
    <section id="rooms" className="w-full px-6 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your{' '}
            <span className="text-orange-500">Room Type</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect accommodation option that fits your budget and lifestyle.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {roomTypes.map((room, index) => (
            <div
              key={index}
              className={`${room.cardBg} rounded-2xl p-3 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-white/50 relative overflow-hidden`}
            >
              {/* Badge */}
              {room.badge && (
                <div className="absolute top-2 right-2 md:top-4 md:right-4">
                  <span className={`${room.iconBg} text-white text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-md`}>
                    {room.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 md:w-20 md:h-20 ${room.iconBg} rounded-2xl flex items-center justify-center mb-3 md:mb-6 shadow-lg`}>
                <room.icon className="text-2xl md:text-3xl text-white" />
              </div>

              {/* Content */}
              <h3 className="text-base md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{room.title}</h3>
              
              {/* Price */}
              <div className="mb-2 md:mb-4">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{room.price}</p>
                <p className="text-xs md:text-sm text-gray-600">{room.priceLabel}</p>
              </div>

              <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-3 md:mb-6 leading-relaxed">{room.description}</p>

              {/* CTA Button */}
              <a 
                href={`https://wa.me/917075861098?text=${encodeURIComponent(`Hello, I would like to enquire about ${room.title} room booking at Cityhive PG`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 md:px-4 md:py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-semibold text-xs md:text-sm shadow-md hover:shadow-lg text-center transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
