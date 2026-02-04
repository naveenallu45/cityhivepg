import React from 'react';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196588/unnamed_n4ruoc.jpg',
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196604/unnamed-6_jvrsky.jpg',
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196610/unnamed-5_bmymdw.jpg',
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196605/unnamed-2_dgyx0m.jpg',
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196612/unnamed-4_jljtrc.jpg',
    },
    {
      id: 6,
      image: 'https://res.cloudinary.com/dmhdhzr6y/image/upload/v1770196604/unnamed-3_fmmpdj.jpg',
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20 bg-indigo-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our premium facilities and comfortable living spaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl aspect-square flex items-center justify-center overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
