import React from 'react';

export default function PopularCourses() {
  const classes = [
    {
      title: 'Play Group',
      ageRange: 'Age 2–3',
      description: 'Learning through play & fun activities',
      iconBg: 'bg-purple-500',
    },
    {
      title: 'Nursery',
      ageRange: 'Age 3–4',
      description: 'Early literacy, numbers & creativity',
      iconBg: 'bg-blue-500',
    },
    {
      title: 'LKG',
      ageRange: 'Age 4–5',
      description: 'Strong basics with playful learning',
      iconBg: 'bg-green-500',
    },
    {
      title: 'UKG',
      ageRange: 'Age 5–6',
      description: 'Reading, writing & confidence building',
      iconBg: 'bg-orange-500',
    },
    {
      title: '1st Class',
      ageRange: 'Age 6–7',
      description: 'Academic foundation with activities',
      iconBg: 'bg-yellow-500',
    },
    {
      title: '2nd Class',
      ageRange: 'Age 7–8',
      description: 'Skill development & subject mastery',
      iconBg: 'bg-pink-500',
    },
  ];

  return (
    <section id="courses" className="w-full px-6 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-purple-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Classes{' '}
            <span className="text-orange-500">We Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your child's learning journey with our comprehensive classes.
          </p>
        </div>

        {/* Class Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{classItem.title}</h3>
              <p className="text-xs sm:text-sm font-semibold text-purple-600 mb-3 sm:mb-4">{classItem.ageRange}</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg font-bold mb-6 sm:mb-8">{classItem.description}</p>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-2">
                <a 
                  href="https://wa.me/9666029839?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admission%20at%20Kinder%20Kaly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 sm:px-4 md:px-5 py-2.5 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium text-xs sm:text-sm shadow-md hover:shadow-lg text-center"
                >
                  Enroll Now
                </a>
                <a 
                  href="https://wa.me/9666029839?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admission%20at%20Kinder%20Kaly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex flex-1 bg-white border-2 border-purple-600 text-purple-600 px-3 sm:px-4 md:px-5 py-2.5 rounded-lg hover:bg-purple-50 transition-colors font-medium text-xs sm:text-sm text-center"
                >
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
