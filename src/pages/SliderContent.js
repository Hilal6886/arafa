import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="relative">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image lg:h-50" src={slide.urls} alt="" />

          <div className="absolute bottom-0 left-3 rounded bg-black-100 mb-5 bg-opacity-25 text-white p-4">
            <h2 className="lg:text-7xl font-bold mb-[1rem] text-2xl">{slide.title}</h2>
            <p className="text-lg mb-[2rem]">{slide.description}</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            Read More
          </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
