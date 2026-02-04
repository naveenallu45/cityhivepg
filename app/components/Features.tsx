import React from 'react';
import { 
  FaSnowflake, 
  FaTshirt, 
  FaWifi, 
  FaShower, 
  FaBox, 
  FaBed, 
  FaArchive, 
  FaVideo 
} from 'react-icons/fa';

export default function Features() {
  const amenities = [
    {
      title: 'AC / Non-AC Rooms',
      description: 'Choose from air-conditioned or non-AC rooms based on your preference. All rooms are well-ventilated and designed for comfort.',
      icon: FaSnowflake,
      iconBg: 'bg-blue-500',
      cardBg: 'bg-blue-50',
    },
    {
      title: 'Washing Machines',
      description: 'Convenient laundry facilities available for all residents. Keep your clothes clean and fresh without any hassle.',
      icon: FaTshirt,
      iconBg: 'bg-green-500',
      cardBg: 'bg-green-50',
    },
    {
      title: '24/7 Wi-Fi',
      description: 'Stay connected with high-speed internet available round the clock. Perfect for work, streaming, and staying in touch.',
      icon: FaWifi,
      iconBg: 'bg-purple-500',
      cardBg: 'bg-purple-50',
    },
    {
      title: '24/7 Hot Water',
      description: 'Enjoy hot water facilities available 24/7 for your convenience. No more waiting for hot water, anytime you need it.',
      icon: FaShower,
      iconBg: 'bg-orange-500',
      cardBg: 'bg-orange-50',
    },
    {
      title: 'Refrigerator',
      description: 'Store your food and beverages safely with dedicated refrigerator facilities. Keep your essentials fresh and cool.',
      icon: FaBox,
      iconBg: 'bg-cyan-500',
      cardBg: 'bg-cyan-50',
    },
    {
      title: 'Comfortable Spring Beds',
      description: 'Rest well on premium spring beds designed for maximum comfort. Wake up refreshed and ready for your day.',
      icon: FaBed,
      iconBg: 'bg-pink-500',
      cardBg: 'bg-pink-50',
    },
    {
      title: 'Spacious Cupboards',
      description: 'Ample storage space with spacious cupboards to organize all your belongings. Keep your room neat and tidy.',
      icon: FaArchive,
      iconBg: 'bg-indigo-500',
      cardBg: 'bg-indigo-50',
    },
    {
      title: 'CCTV Cameras',
      description: '24/7 security surveillance with CCTV cameras ensuring a safe and secure living environment for all residents.',
      icon: FaVideo,
      iconBg: 'bg-red-500',
      cardBg: 'bg-red-50',
    },
  ];

  return (
    <section id="amenities" className="w-full px-6 py-16 md:px-12 lg:px-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium{' '}
            <span className="text-purple-600">Amenities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for a comfortable and convenient living experience.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`${amenity.cardBg} rounded-2xl p-3 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 md:w-16 md:h-16 ${amenity.iconBg} rounded-xl flex items-center justify-center mb-2 md:mb-4 shadow-md`}>
                <amenity.icon className="text-xl md:text-2xl text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                {amenity.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
