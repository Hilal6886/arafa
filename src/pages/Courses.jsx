import React, { useState,useEffect } from "react";
import quran from ".././assets/imagest/quran.jpg";
import extra from ".././assets/imagest/extra.jpg";
import extrac from ".././assets/imagest/extrac.jpg";
import moral from ".././assets/imagest/moral.jpg";
import bh5 from ".././assets/imagest/bh5.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Courses = () => {
  const [showMore, setShowMore] = useState([false, false, false, false]);
  useEffect(() => {
    AOS.init({
      duration: 600, // Adjust the animation duration as needed
      easing: 'ease-in-out', // Choose the easing type
    });
  }, []);

  const toggleShowMore = (index) => {
    setShowMore((prevShowMore) => {
      const newShowMore = [...prevShowMore];
      newShowMore[index] = !newShowMore[index];
      return newShowMore;
    });
  };
  const links = [
    { name: 'Critical Thinking', href: '#' },
    { name: 'Creativity', href: '#' },
    { name: 'Ethical Behavior', href: '#' },
    { name: 'Self-discipline', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '03' },
    { name: 'Full-time students', value: '1000+' },
    { name: ' Facilitie Members', value: '40+' },
    { name: 'Play grounds', value: '05+' },
  ]

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
        <h2 className="text-xl md:text-xl hed lg:text-2xl xl:text-3xl mb-1 2xl:text-6xl font-bold mb-6">
        Our <span className="text-pink-800 hed">Courses</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-xl text-Heart-800 text-center mb-4">
        Explore Our Academic Courses
        </p>
       
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`my-4 max-w-xs transform overflow-hidden rounded-md bg-white shadow-lg transition-transform hover:scale-105`}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <img
              className="h-48 w-full object-cover object-center"
              src={card.imageSrc}
              alt={`Card ${index + 1} Image`}
            ></img>
            <div className="px-4 py-3">
              <h3 className="text-lg md:text-lg lg:text-xl xl:text-xl xl:text-xl font-sami-bold mb-1 text-Heart-100 text-center">
                {card.title}
              </h3>
              <p className="text-Heart-400 text-center dark:text-Heart-400">
                {showMore[index]
                  ? card.subtitle
                  : `${card.subtitle.slice(0, 100)}...`}
                <span
                  className="cursor-pointer text-center text-Heart-400"
                  onClick={() => toggleShowMore(index)}
                >
                  {showMore[index] ? " Show less" : " Show more"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img src={bh5}
       alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2  data-aos="fade-right" className="text-4xl leading-19 font-bold tracking-tight text-white sm:text-6xl">Unleashing Potential Building Dreams </h2>
          <p  data-aos="fade-right" className="mt-6 text-lg leading-8 text-gray-300">
          Discover a world of knowledge and growth at Arafa International School. Empowering young minds with excellence in education,
           we create an environment where curiosity thrives.
          Ignite Curiosity, Foster Growth, and Prepare for a Future of Endless Possibilities
          Empowering Students to Excel, Innovate, and Lead with Confidence.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div  data-aos="fade-right" className="grid grid-cols-1 gap-x-8 gap-y-6 text-base  leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name}  data-aos="fade-up" className="flex flex-col-reverse ">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Courses;
