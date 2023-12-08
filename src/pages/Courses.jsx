import React from 'react';
import { AiFillCrown, AiOutlineGlobal, AiFillApi, AiOutlineTeam } from 'react-icons/ai';

const CardSection = () => {
  const cards = [
    {
      icon: <AiFillCrown size={40} color="#FFD700" />,
      title: 'Academic Excellence',
      subtitle: 'Elevate your future with unparalleled educational standards.',
    },
    {
      icon: <AiOutlineGlobal size={40} color="#1E90FF" />,
      title: 'State-of-the-Art Facilities',
      subtitle: 'Immerse in an empowering learning space with cutting-edge facilities.',
    },
    {
      icon: <AiFillApi size={40} color="#32CD32" />,
      title: 'Holistic Development',
      subtitle: 'Cultivate leaders and talents through a well-rounded education.',
    },
    {
      icon: <AiOutlineTeam size={40} color="#FF4500" />,
      title: 'Supportive Community',
      subtitle: 'Flourish in a caring and inclusive community that supports your journey.',
    },
  ];

  return (
    <section className="container bg-white-100 py-12 mt-13">
      <div className="text-center">
        <p className="section-subtitle">Why Choose Us</p>
       
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
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
