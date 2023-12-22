import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import heroBgImage from ".././assets/imagest/heroB.png";
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

const HomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Set the animation duration
      easing: "ease-in-out", // Set the easing function
      once: true, // Set whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <section
        className="relative lg:mt-[6px] flex h-screen  w-full items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgImage})` }}
        data-aos="fade"
      >
        <div className="p-8  z-10 mx-auto leading-[7rem] text-center">
          <div className="flex flex-col gap-8 lg:mt-[3rem] lg:flex-row mt-[12rem] sm:mt-0">
            <div className="lg:w-[50rem]">
            <p className="text-[3rem] lg:text-[5.5rem] text-indigo-600 font-bold md:text-left tracking-wide text-headingColor">
            Arafah 
            <span className=" text-[3rem] lg:text-[5.5rem] ">
          International
            School
            </span>
          </p>
  
          <p className="text-base text-textColor  justify-center text-center md:text-left md:w-[80%]">
          Discover a world of knowledge and growth at Arafa International School.
           Empowering young minds with excellence in education, we create an environment 
           where curiosity thrives,
           dreams soar, and futures are shaped. Join us in the journey of learning
          </p>
  
          <button
            type="button"
            className=" mt-[1rem] text-white bg-gradient-to-br from-indigo-700 to-indigo-700 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Addmision now
          </button>
            </div>
            <div className="flex lg:mt-[3rem] justify-end gap-[05px] lg:w-1/2 ">
              <div>
                <img
                  src={heroBanner1}
                  alt="Hero Banner 1"
                  className="w-full rounded-l-[34px] "
                  data-aos="fade-right"
                />
              </div>
              <div className="mt-[0px]" data-aos="fade-left">
                <img
                  src={hero10}
                  alt="Hero Banner 1"
                  className="mb-[03px] w-[205px] rounded-r-[10px] "
                />
                <img
                  src={hero9}
                  alt="Hero Banner 1"
                  className="w-[205px] rounded-r-[10px] "
                />
              </div>

              <div className="from-black to-transparent absolute inset-0 bg-gradient-to-r"></div>
            </div>
          </div>
        </div>
      </section>
      <CardSection />
      <section>
        <Category />
      </section>

      <section>
        <Courses />
      </section>
      <section>
        <div className="mt-[123px] text-center">
          <h2 className="h2 section-title mb-[40px]">
            {" "}
            Explore
            <span className="span">Our Campus</span> Gallary
          </h2>
        </div>
        <ImageGallery />
      </section>
      <section>
        <div className="mt-[23px] text-center">
          <h2 className="h2 section-title mb-[40px]">
            Our <br />
            <span className="span">Daily Blogs</span>
          </h2>
        </div>
        <Blog />
      </section>
      <section>
        <div className="mt-[23px] text-center">
          <h2 className="h2 section-title mb-[40px]">
            Frequently
            <span className="span">Asked</span> Questions
          </h2>
        </div>
        <FaqSection />
      </section>
      <ContactUs />
      <section></section>
    </div>
  );
};

export default HomeSection;
