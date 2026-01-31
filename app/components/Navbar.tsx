import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full px-3 py-[0.65625rem] md:px-12 lg:px-20 md:py-4 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1769838619/Screenshot_2026-01-31_at_11.17.15_AM_qr7yqz.png"
            alt="KidsLearn Logo"
            width={132}
            height={44}
            className="h-[2.435125rem] w-auto md:h-11"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors text-lg">
            Features
          </a>
          <a href="#courses" className="text-gray-700 hover:text-purple-600 transition-colors text-lg">
            Courses
          </a>
          <a href="#reviews" className="text-gray-700 hover:text-purple-600 transition-colors text-lg">
            Reviews
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <a 
            href="https://wa.me/9666029839?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admission%20at%20Kinder%20Kaly"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-[0.69575rem] md:px-5 md:py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all font-medium text-xs sm:text-sm md:text-base whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Admissions Open 2026-2027
          </a>
          <a 
            href="https://wa.me/9666029839?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admission%20at%20Kinder%20Kaly"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 md:px-5 md:py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium text-xs sm:text-sm md:text-base whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Admission Enquiry
          </a>
        </div>
      </div>
    </nav>
  );
}
