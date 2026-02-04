import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

export default function OurBranches() {
  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20 bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="text-purple-600">Location</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us at our premium location. Conveniently located near major IT hubs.
          </p>
        </div>

        {/* Single Branch Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="relative h-64 md:h-auto min-h-[300px]">
              <Image
                src="https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770198485/WhatsApp_Image_2026-02-04_at_3.17.24_PM_ewrwah.jpg"
                alt="Cityhive PG Building"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Address & Contact */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Cityhive Luxury Men's PG
                </h3>
                <p className="text-purple-600 font-semibold mb-6">📍 Financial District, Hyderabad</p>
              </div>

              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-purple-600 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Plot No. 64, Financial District, Serilingampally, Hyderabad, Nanakramguda, Telangana 500032
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+917075861098" className="text-gray-900 font-semibold hover:text-purple-600 transition-colors">
                      +91 70758 61098
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-green-600 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <a 
                      href="https://wa.me/917075861098?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20booking%20at%20Cityhive%20PG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-semibold hover:text-green-600 transition-colors"
                    >
                      +91 70758 61098
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-orange-600 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Visiting Hours</p>
                    <p className="text-gray-900 font-semibold">Mon-Sun: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href="https://wa.me/917075861098?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20room%20booking%20at%20Cityhive%20PG"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us for Booking
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
