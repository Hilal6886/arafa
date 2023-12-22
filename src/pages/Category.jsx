import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import aboutUsImage1 from '../assets/imagest/about.jpg';

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0 bg-gray-100" data-aos="fade-up">
      <div className="text-center">
        <h2 className="h2 section-title mb-[40px]">
          <span className="span">About</span> Us
        </h2>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Images Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
          <img
            src={aboutUsImage1}
            alt="About Us Image 1"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 lg:pl-8  flex flex-col items-center" data-aos="fade-left">
          <p className="text-Heart-800 text-center mb-4">
            Arafah International School offers an enriching and seamless educational journey within a supportive community dedicated to excellence in both the present and the beyond. Each facet of our educational approach is meticulously crafted to captivate our students' intellect and talents, reshaping their perspectives to navigate the competitive global landscape while nurturing their personal aspirations.
          </p>
          <p className="text-Heart-800  text-center mb-4">
            In our eyes, every child is a unique individual endowed with distinct abilities. From grasping the intricacies of science and mathematics to cultivating the art of eloquent public speaking, our students are meticulously cultivated to articulate what distinguishes them as global citizens.
          </p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
