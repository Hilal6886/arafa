import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from ".././assets/imagest/img1.jpg";
import img2 from ".././assets/imagest/img2.jpg";
import img3 from ".././assets/imagest/img3.jpg";
import img4 from ".././assets/imagest/img4.jpg";
import img5 from ".././assets/imagest/img5.jpg";
import img6 from ".././assets/imagest/img6.jpg";
import img7 from ".././assets/imagest/img7.jpg";
import img8 from ".././assets/imagest/img8.jpg";
const PinterestGallery = () => {
  const images = [
    { src: img1, alt: 'Description for image 1' },
    { src: img2, alt: 'Description for image 2' },
    { src: img3, alt: 'Description for image 3' },
    { src: img4, alt: 'Description for image 4' },
    { src: img5, alt: 'Description for image 1' },
    { src: img6, alt: 'Description for image 2' },
    { src: img7, alt: 'Description for image 3' },
    { src: img8, alt: 'Description for image 4' },
    // Add more image objects as needed
  ];
  useEffect(() => {
    AOS.init({
      duration: 600, // Adjust the animation duration as needed
      easing: 'ease-in-out', // Choose the easing type
    });
  }, []);

  return (
    <section className=" lg:mt-[5rem] justify-center p-3">
      <div className="text-center lg:mb-[4rem]">
        <h2 className="text-2xl md:text-3xl hed lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6">
         <span className="text-blue-500 hed">Cumpus</span> Gallary
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-Heart-800 text-center mb-4">
        Capturing Moments Step into Our Campus Gallery.
        </p>
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className={`relative overflow-hidden rounded-md`}
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* "See More" Button */}
      <div className=" mt-8">
        <button className="bg-green-500 text-white py-2 px-4 mb-[3rem] rounded-md hover:bg-green-700 transition-colors">
          See More
        </button>
      </div>
    </section>
  );
};

export default PinterestGallery;
