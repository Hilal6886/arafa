import React, { useState } from "react";
import quran from ".././assets/imagest/quran.jpg";
import extra from ".././assets/imagest/extra.jpg";
import extrac from ".././assets/imagest/extrac.jpg";
import moral from ".././assets/imagest/moral.jpg";

const Courses = () => {
  const [showMore, setShowMore] = useState([false, false, false, false]);

  const toggleShowMore = (index) => {
    setShowMore((prevShowMore) => {
      const newShowMore = [...prevShowMore];
      newShowMore[index] = !newShowMore[index];
      return newShowMore;
    });
  };

  const cardData = [
    {
      title: "Moral Ethics",
      subtitle:
        "At Arafah Group of Institutions, we hold in high regard the principles of humanity and social decorum. Our commitment lies in instilling in each child the ethos of harmonious coexistence within a diverse and multicultural society. It is our fervent endeavor to familiarize our students not only with the varied ideologies and belief systems within our nation but also those extending across the global landscape  In the pursuit of this noble cause, we draw inspiration from the profound teachings of the Glorious Quran and the wisdom encapsulated in the sayings of Prophet Muhammad (PBUH). Through these teachings, we aim to cultivate a mindset that fosters respect for all diversities, thereby nurturing enlightened global citizens.Our dedicated efforts extend beyond mere education; we actively work towards dispelling misconceptions and prejudices that may linger in the minds of some individuals. By doing so, we contribute to fortifying the values enshrined in the preamble of the Constitution of India fostering a society built on understanding, tolerance, and unity.",
      imageSrc:
       moral,
    },
    {
      title: "Academic Education",
      subtitle:
        "Arafah group of institutions provides a balanced approach of Montessori and Kindergarten methods of teaching. Our curriculum and books cater to competitive standards of learning and concept understanding. Much focus is given to skill development and activity-based inception of topics. For higher grades, AGI, adapts the State board syllabus along with add-on learning tools for future prospects.   ",
      imageSrc:
        extra,
    },
    {
      title: "Extra Curriculum",
      subtitle:
        "We believe, that recreation/hobbies and passion to master art is an important part of a child's life. Over the past few years, many students at AGI have mastered and won titles in Taekwondo and athletics. We encourage them to participate in interschool competitions for various genres and help to make them professionals in what they pursue. Sports / Arts / Personality development is given equal importance to building a holistic student career.",
      imageSrc:
        extrac,
    },
    {
      title: "Cognitive intelligence and Quran",
      subtitle:
        "Improved Memorization Skills: Participants will develop enhanced memorization abilities through the systematic process of Quranic memorization. This course aims to refine the cognitive aspects associated with effective memorization.\n\nStimulated Critical Thinking: Engagement with the Quranic memorization process serves as a catalyst for stimulating critical thinking skills in children. The course explores how the intricate nature of Quranic verses prompts thoughtful analysis, fostering a mindset geared towards analytical reasoning.\n\nFoundation for Academic Mastery: The course positions Quranic memorization as an initial step, providing participants with a solid foundation for mastering a range of knowledge areas. It highlights how this foundational skillset empowers children to excel in diverse academic disciplines.",
      imageSrc: quran,
    },
  ];

  return (
    <section>
      <div className="text-center">
        <h2 className="h2 section-title mb-[40px]">
          Our <span className="span">Courses</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="my-4 max-w-xs transform overflow-hidden rounded-md bg-white shadow-lg transition-transform hover:scale-105"
          >
            <img
              className="h-48 w-full object-cover object-center"
              src={card.imageSrc}
              alt={`Card ${index + 1} Image`}
            ></img>
            <div className="px-4 py-3">
              <h3 className="mb-1 text-lg text-Heart-900 text-center font-bold">{card.title}</h3>
              <p className="text-Heart-800 text-center text-sm">
                {showMore[index]
                  ? card.subtitle
                  : `${card.subtitle.slice(0, 100)}...`}
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => toggleShowMore(index)}
                >
                  {showMore[index] ? " Show less" : " Show more"}
                </span>
              </p>  
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
