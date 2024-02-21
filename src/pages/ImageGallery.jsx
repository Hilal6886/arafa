import React, { useEffect, useState } from 'react';

// Images
import hills from "../assets/imagest/img1.jpg";
import mountainLake from "../assets/imagest/img2.jpg";
import seaside from "../assets/imagest/img3.jpg";
import stream from "../assets/imagest/img4.jpg";
import valley from "../assets/imagest/img5.jpg";

const images = [hills, mountainLake, seaside, stream, valley];
const imageUrl = "https://img.freepik.com/free-photo/gray-abstract-wireframe-technology-background_53876-101941.jpg?size=626&ext=jpg&uid=R99272721&ga=GA1.1.397597975.1703442575&semt=ais";

const PinterestGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Function to handle slider navigation
  const setSlider = (number) => {
    let newIndex = slideIndex + number;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setSlideIndex(newIndex);
  };

  useEffect(() => {
    // Timer for automatic slide transition
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Adjust interval for faster sliding

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cover h-svh bg-center flex flex-col justify-center items-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="container mx-auto py-8 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 hed text-pink-800">Campus Gallery</h2>
        <p className="text-lg text-gray-700 mb-[-4rem]"></p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-8">
        <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold uppercase text-indigo-70 mb-4"> Capturing Moments Step into Our Campus Gallery.</h1>
          <p className="text-base md:text-lg text-gray-400 mb-4"> we believe in capturing the essence and vibrancy of campus life through the art of photography. Our Campus Photography collection offers a glimpse into the heart of our school, showcasing the beauty of our campus and the 
          diverse activities that take place within its grounds</p>
          <button className="bg-indigo-700 text-white t py-2 px-6 rounded-md hover:bg-indigo-700">See More</button>
        </div>
        <div className="relative w-full max-w-3xl h-96 overflow-hidden rounded-lg shadow-lg">
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Transparent overlay */}
          <img className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 opacity-100" src={images[slideIndex]} alt={`Slide ${slideIndex + 1}`} />
          <div className="absolute top-[10rem] left-0 transform -translate-x-1/2 mb-4 ml-1/2">
            <button
              onClick={() => setSlider(-1)}
              className="bg-indigo-500 text-white p-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-gray-200 hover:text-gray-800"
            >
              &lt;
            </button>
          </div>
          <div className="absolute top-[10rem] right-0 transform translate-x-1/2 mb-4 mr-1/2">
            <button
              onClick={() => setSlider(1)}
              className=" bg-indigo-500 text-white p-2 rounded-full shadow-lg transition-transform duration-300 hover:bg-gray-200 hover:text-gray-800"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinterestGallery;
