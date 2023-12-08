import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import school1 from '.././assets/imagest/school1.JPG';
import school2 from '.././assets/imagest/school2.JPG';

const images = [school1, school2];

const Contact = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => setCurrentImageIndex(next),
  };

  return (
    <section className="mt-19 relative h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`School ${index + 1}`}
              className="object-cover w-full h-screen"
            />
            <div
              className="absolute inset-0 bg-black opacity-40"
              aria-hidden="true"
            ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Arfa Group of Schools
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6">
                We provide the best education for a brighter future.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                Admission Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Contact;
