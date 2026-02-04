import React from 'react';

export default function CTA() {
  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400 rounded-full opacity-30 -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-300 rounded-full opacity-40 -translate-x-12 translate-y-12"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to find your perfect PG?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of working professionals. Experience premium living with modern amenities and unmatched convenience. Book your room today!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/917075861098?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20booking%20at%20Cityhive%20PG"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-white shadow-lg hover:shadow-xl text-center"
              >
                Book Room Now
              </a>
              <a 
                href="https://wa.me/917075861098?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20booking%20at%20Cityhive%20PG"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all font-medium shadow-lg hover:shadow-xl text-center"
              >
                Contact for Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
