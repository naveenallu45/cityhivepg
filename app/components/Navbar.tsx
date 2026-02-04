import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full px-3 py-[0.65625rem] md:px-12 lg:px-20 md:py-4 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196208/622570969_17851432797664466_7802255184101371826_n_u0zpfi_e_background_removal_f_png_jhmmnp.png"
            alt="Cityhive PG Logo"
            width={259}
            height={87}
            className="h-[4.77rem] w-auto md:h-[5.425rem]"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#amenities" className="text-gray-700 hover:text-purple-600 transition-colors text-lg">
            Amenities
          </a>
          <a href="#rooms" className="text-gray-700 hover:text-purple-600 transition-colors text-lg">
            Rooms
          </a>
          <a href="#reviews" className="text-gray-700 hover:text-purple-600 transition-colors text-lg">
            Reviews
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <a 
            href="https://wa.me/917075861098?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20booking%20at%20Cityhive%20PG"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-[0.69575rem] md:px-5 md:py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all font-medium text-xs sm:text-sm md:text-base whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Book PG Room Now
          </a>
          <a 
            href="https://wa.me/917075861098?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20booking%20at%20Cityhive%20PG"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 md:px-5 md:py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium text-xs sm:text-sm md:text-base whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Enquiry
          </a>
        </div>
      </div>
    </nav>
  );
}
