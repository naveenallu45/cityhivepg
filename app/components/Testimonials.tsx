import React from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Tharun Reddy',
      role: 'Software Engineer',
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770199489/482743223_1577900379573471_4282267051009692732_n_rx55ba.jpg',
      quote: 'Cityhive PG has been perfect for me! The location is great - just 1km from my office. The Wi-Fi is fast, rooms are clean, and the amenities are top-notch. Highly recommended!',
    },
    {
      name: 'Abhinav Karthik',
      role: 'IT Professional',
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770199488/435633609_1139243857495656_4088283122590422982_n_iu0zsl.jpg',
      quote: 'Living here has been a great experience. The AC room is comfortable, hot water is available 24/7, and the washing machine facility is very convenient. Great value for money!',
    },
    {
      name: 'Gowri shankar',
      role: 'Working Professional',
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770199488/625111834_18342682315236876_1309534540373568821_n_edzy87.jpg',
      quote: 'The new building is well-maintained and secure. The spring beds are comfortable, and the spacious cupboards are a plus. Perfect for working professionals like me!',
    },
  ];

  return (
    <section id="reviews" className="w-full px-6 py-16 md:px-12 lg:px-20 bg-pink-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What{' '}
            <span className="text-purple-600">residents</span>
            {' '}say about us
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-purple-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
