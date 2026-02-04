import React from 'react';
import Image from 'next/image';
import { FaBuilding, FaCrown, FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:px-20 overflow-x-hidden bg-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            {/* Trusted Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <FaBuilding className="text-sm" />
                <span className="text-xs sm:text-sm font-semibold">New Building</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <FaCrown className="text-sm" />
                <span className="text-xs sm:text-sm font-semibold">Premium Living</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <FaMapMarkerAlt className="text-sm" />
                <span className="text-xs sm:text-sm font-semibold">1km from IT Hubs</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to{' '}
              <span className="text-blue-600">Cityhive</span>
              {' '}Luxury{' '}
              <span className="text-orange-500">Men's PG</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Premium living space for working professionals. Modern amenities, comfortable rooms, and just 1km from major IT hubs. Your perfect home away from home.
            </p>

            {/* Key Highlights */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">24/7 Wi-Fi</span>
              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">AC/Non-AC Rooms</span>
              <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Near IT Hubs</span>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <a 
                href="https://wa.me/917075861098?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20booking%20at%20Cityhive%20PG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl hover:from-purple-700 hover:to-orange-600 transition-all font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                <span className="hidden sm:inline">Book Your PG Room Now →</span>
                <span className="sm:hidden">Book PG Room →</span>
              </a>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="relative flex gap-2 sm:gap-4 justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0">
            <div className="flex gap-2 sm:gap-4">
              {/* PG Image 1 */}
              <div className="w-24 h-32 sm:w-36 sm:h-44 md:w-52 md:h-60 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196610/unnamed-5_bmymdw.jpg"
                  alt="Cityhive PG - Premium living space"
                  width={200}
                  height={235}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 208px"
                />
              </div>

              {/* PG Image 2 */}
              <div className="w-24 h-32 sm:w-36 sm:h-44 md:w-52 md:h-60 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mt-4 sm:mt-6 md:mt-8">
                <Image
                  src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196588/unnamed_n4ruoc.jpg"
                  alt="Cityhive PG - Modern amenities"
                  width={200}
                  height={235}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 208px"
                />
              </div>

              {/* PG Image 3 */}
              <div className="w-24 h-32 sm:w-36 sm:h-44 md:w-52 md:h-60 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196612/unnamed-4_jljtrc.jpg"
                  alt="Cityhive PG - Comfortable rooms"
                  width={200}
                  height={235}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 144px, 208px"
                />
              </div>
            </div>
            
            {/* Decorative Circle */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-16 h-16 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
