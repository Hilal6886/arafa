import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import heroBgImage from ".././assets/imagest/hb2.jpg";
import heroBanner1 from ".././assets/imagest/sch.jpg";
import hero9 from ".././assets/imagest/hero9.jpg";
import hero10 from ".././assets/imagest/Output1.jpg";
import Category from "./Category";
import Courses from "./Courses";
import Fee from "./Fee";
import ImageGallery from "./ImageGallery";
import FaqSection from "./Faq";
import Blog from "./Blog";
import CardSection from "./CardSection";
import ContactUs from "./Contact";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";
import Contact from "./Contact";

const len = sliderImage.length - 1;
const HomeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  useEffect(() => {
    AOS.init({
      duration: 800, // Set the animation duration
      easing: "ease-in-out", // Set the easing function
      once: true, // Set whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <section>
        <div className="slider-contaner">
          <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
          
        
        </div>
      </section>

      <section>  <CardSection /></section>

      <section>
        <Category />
      </section>

      <section>
        <Courses />
      </section>
      <section>
      <Blog />
        
      </section>
      <section>
      <ImageGallery />
        
      </section>
      <section>

        <FaqSection />
      </section>
      <section>

        <Contact />
      </section>


    </div>
  );
};

export default HomeSection;
