import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import a1 from ".././assets/imagest/analysis.png";
import a2 from ".././assets/imagest/a2.png"; 
import a3 from ".././assets/imagest/a3.png"; 
import a4 from ".././assets/imagest/a4.png"; 



const CardSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  const cards = [
    {
      image: a1, // Use the image source for the first card
      title: 'Academic Excellence',
      subtitle: 'Elevate your future with unparalleled educational standards.',
    },
    {
      image: a3, // Use the image source for the second card
      title: 'State-of-the-Art Facilities',
      subtitle: 'Immerse in an empowering learning space with cutting-edge facilities.',
    },
    {
      image: a4, 
      title: 'Holistic Development',
      subtitle: 'Cultivate leaders and talents through a well-rounded education.',
    },
    {
      image: a2, 
      title: 'Supportive Community',
      subtitle: 'Flourish in a caring and inclusive community that supports your journey.',
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-4 bg-gray-100 p-3 rounded-lg shadow-lg">
      <div className="text-center mt-[3rem]">
        <h2 className="text-2xl hed md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6">
          Why <span className="text-blue-500 hed">Choose</span> Us
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-Heart-800 text-center mb-4">
          Empowering Minds, Building Leaders, and Nurturing Excellence in Education
        </p>
      </div>
      <div className="grid grid-cols-1 mb-[2rem] sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring focus:border-blue-300`}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <div className="mb-4">
              <img src={card.image} alt={card.title} className="w-[150px] h-[150px] mx-auto" />
            </div>
            <h2 className="text-lg leading-relaxed md:text-lg lg:text-xl xl:text-xl font-bold mb-1 text-indigo-400 text-center mb-[1rem]">{card.title}</h2>
            <p className="text-Heart-800 leading-relaxed">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
