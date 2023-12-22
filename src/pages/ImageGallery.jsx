import React from 'react';

const PinterestGallery = () => {
  const images = [
    'https://placekitten.com/400/600',
    'https://placekitten.com/600/400',
    'https://placekitten.com/800/1200',
    'https://placekitten.com/1200/800',
    'https://placekitten.com/600/800',
    'https://placekitten.com/800/600',
    'https://placekitten.com/1000/800',
    'https://placekitten.com/800/1000',
    // Add more image URLs as needed
  ];

  return (
    <section className="container my-12">
      <div className="text-center">
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative overflow-hidden rounded-md">
            <img
              src={imageUrl}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* "See More" Button */}
      <div className="text-center mt-8">
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
          See More
        </button>
      </div>
    </section>
  );
};

export default PinterestGallery;
