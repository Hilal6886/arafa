import React from 'react';
import { AiFillCrown, AiOutlineGlobal, AiFillApi, AiOutlineTeam } from 'react-icons/ai';

const CardSection = () => {
  const cards = [
    {
      icon: <AiFillCrown size={40} color="#FFD700" />,
      title: 'Academic Excellence',
      subtitle: 'Elevate your future with unparalleled educational standards.',
      backgroundColor: '#FCEBB6',
    },
    {
      icon: <AiOutlineGlobal size={40} color="#1E90FF" />,
      title: 'State-of-the-Art Facilities',
      subtitle: 'Immerse in an empowering learning space with cutting-edge facilities.',
      backgroundColor: '#89CFF0',
    },
    {
      icon: <AiFillApi size={40} color="#32CD32" />,
      title: 'Holistic Development',
      subtitle: 'Cultivate leaders and talents through a well-rounded education.',
      backgroundColor: '#D1F2EB',
    },
    {
      icon: <AiOutlineTeam size={40} color="#FF4500" />,
      title: 'Supportive Community',
      subtitle: 'Flourish in a caring and inclusive community that supports your journey.',
      backgroundColor: '#7FFFD4',
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-4 mt-[84px]">
      <div className="text-center mt-[6rem] sm:mt-0">
        <h2 className="h2 px-8 section-title mb-[40px]">
          Why <span className="span">Choose</span> Us
        </h2>
        <p className="text-black mb-8 text-lg md:text-xl lg:text-2xl">
        Empowering Minds, Building Leaders, and Nurturing Excellence in
        Education
      </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md text-center`}
            style={{ backgroundColor: card.backgroundColor }}
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-900">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
