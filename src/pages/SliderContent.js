import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="relative">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image h-svh lg:h-[40rem] md:h-[40rem]" src={slide.urls} alt="" />

          <div className="absolute lg:bottom-0 md:bottom-0 bottom- top-[7.5rem] lg:top-[25.5rem] md:top-0 left-3 rounded bg-black-100 mb-5 bg-opacity-25 text-white p-2">
            <h2 className="lg:text-7xl font-bold md:text-6xl lg:mb-[1rem] text-lg">{slide.title}</h2>
            <p className="text-sm mb-[1rem]">{slide.description}</p>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            Read More
          </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
