import React from 'react';
import Image from 'next/image';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaCheckCircle,
  FaHome,
  FaBriefcase,
  FaWhatsapp,
  FaSnowflake,
  FaWifi,
  FaShower,
  FaTshirt,
  FaBox,
  FaBed,
  FaArchive
} from 'react-icons/fa';

export default function Footer() {
  const amenities = [
    { name: 'AC / Non-AC Rooms', icon: FaSnowflake, color: 'text-blue-400' },
    { name: '24/7 Wi-Fi', icon: FaWifi, color: 'text-purple-400' },
    { name: '24/7 Hot Water', icon: FaShower, color: 'text-orange-400' },
    { name: 'Washing Machines', icon: FaTshirt, color: 'text-green-400' },
    { name: 'Refrigerator', icon: FaBox, color: 'text-cyan-400' },
    { name: 'Comfortable Spring Beds', icon: FaBed, color: 'text-pink-400' },
    { name: 'Spacious Cupboards', icon: FaArchive, color: 'text-indigo-400' },
  ];

  const roomTypes = [
    { name: 'Single Sharing', price: '₹23,000', icon: FaHome, color: 'text-purple-400' },
    { name: 'Double Sharing', price: '₹12,000', icon: FaHome, color: 'text-blue-400' },
    { name: 'Triple Sharing', price: '₹9,000', icon: FaHome, color: 'text-green-400' },
    { name: 'Four Sharing', price: '₹8,000', icon: FaHome, color: 'text-orange-400' },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196208/622570969_17851432797664466_7802255184101371826_n_u0zpfi_e_background_removal_f_png_jhmmnp.png"
                alt="Cityhive PG Logo"
                width={120}
                height={40}
                className="h-auto rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Premium living space for working professionals. New building with modern amenities, located just 1km from major IT hubs.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <span className="text-gray-400">1km from major IT hubs</span>
            </div>
          </div>

          {/* Amenities and Room Rent - Side by side on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:col-span-2">
            {/* Amenities */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Amenities</h3>
              <ul className="space-y-3 text-sm">
                {amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className={`w-6 h-6 ${amenity.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <amenity.icon className="text-sm" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors">{amenity.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Room Rent */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Room Types</h3>
              <ul className="space-y-3 text-sm">
                {roomTypes.map((room, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <div className={`w-6 h-6 ${room.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <room.icon className="text-sm" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      <span className="font-medium">{room.name}</span> – <span className="text-purple-400 font-semibold">{room.price}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-800">
                <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center">
                  <FaBriefcase className="text-white text-xs" />
                </div>
                <p className="text-purple-400 font-medium text-sm">Ideal for Working Professionals</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors shadow-md">
                  <FaPhone className="text-white text-sm" />
                </div>
                <a href="tel:+917075861098" className="text-gray-400 hover:text-white transition-colors font-medium">
                  +91 70758 61098
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors shadow-md">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">cityhivepg@gmail.com</span>
              </li>
              <li className="pt-2">
                <a 
                  href="https://wa.me/917075861098?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20booking%20at%20Cityhive%20PG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-all font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105 group"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>©2025 Cityhive Luxury Men's PG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
