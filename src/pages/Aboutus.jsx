import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaRegBuilding, FaHandsHelping, FaGlobe, FaHeart } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <section className="mt-[7rem] justify-center ">
      <div className="text-center">
        <h2 className="text-2xl mt-[3rem] md:text-3xl hed lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6">
          <span className="text-blue-500 hed">About</span> Us
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-Heart-800 text-center mb-4">
          Fostering Growth, Igniting Passion
        </p>

      </div>
      <div className="bg-gray-100 mt-[2rem] min-h-screen">
        <div className="container mx-auto p-4">
          <div className="mb-8 text-center">
            <img
              src="https://img.freepik.com/free-vector/library-room-with-book-interior-cartoon-background-old-librarian-bookshelf-wall-college-university-night-with-cozy-armchair-lamp-light-read-public-hall-literature-university_107791-22700.jpg?size=626&ext=jpg&uid=R99272721&ga=GA1.1.397597975.1703442575&semt=ais"
              alt="School Building"
              className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="text-gray-400">
            <h1 className="text-2xl  text-center md:text-3xl lg:text-3xl font-bold mb-4 leading-tight">
              Welcome to Arafa International School
            </h1>

            <p className="text-lg text-center text-gray-400 mb-8">
              At Arafa International School, we are on a mission to cultivate a community of empowered individuals. Our commitment
              to fostering a love for learning and promoting character development sets us apart. Explore what defines us and join
              us on this educational journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {infoItems.map((item) => (
                <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
              ))}
            </div>

            <h2 className="text-xl text-gray-400 md:text-2xl lg:text-3xl font-bold my-8 leading-tight">
              Exceptional Faculty
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our success is driven by a dedicated and highly qualified faculty. At Arafa International School, our teachers are not
              just instructors; they are mentors, guiding students
              on their educational journey with care and dedication.
              In the realm of education, the heartbeat of Arafa International School is undeniably its faculty. The term "Exceptional Faculty" at Arafa International School transcends a mere job description; it encapsulates a profound commitment to the holistic development of each student. As we delve into the intricacies of our educational ecosystem, we uncover a tapestry woven with expertise, dedication, and a passion for fostering the leaders of tomorrow.

              <h4 className='mt-[2rem] font-bold'>The Pillars of Expertise:</h4> <br />
              The faculty at Arafa International School stands as the cornerstone of academic excellence. Comprising seasoned educators with diverse backgrounds and specialized knowledge, they bring a wealth of experience to the classroom. These experts in their respective fields serve not just as disseminators of information but as cultivators of curiosity. Their proficiency becomes a guiding light, illuminating the path toward a deeper understanding of the subject matter.
              <h4 className='mt-[2rem] font-bold'>A Symphony of Dedication:</h4> <br />

              Dedication is the melody that resonates through the halls of Arafa International School. Our faculty is not merely present within the confines of the classroom; they are invested in the personal and academic growth of each student. Beyond the conventional responsibilities, they serve as mentors, fostering a supportive environment where questions are encouraged, and intellectual curiosity is kindled. The commitment to student success extends far beyond the curriculum, creating a vibrant community of learners.
              <h4 className='mt-[2rem] font-bold'>Personalized Learning Journeys:</h4> <br />

              Recognizing the uniqueness of each student at Arafa International School, our faculty embraces a personalized approach to education. By understanding the individual strengths and challenges of their students, educators tailor their methodologies to provide a customized learning experience. This commitment to recognizing and nurturing individual potential ensures that no student is left behind, fostering an environment where every learner can thrive.
              <h4 className='mt-[2rem] font-bold'>Beyond the Classroom Walls:</h4> <br />

              Exceptional faculty members at Arafa International School understand that education extends beyond the boundaries of textbooks and syllabi. They actively engage in extracurricular activities, from mentoring clubs and organizations to guiding students in research endeavors. This holistic approach to education prepares students not only for academic success but also for the multifaceted challenges of life beyond the school gates.
              <h4 className='mt-[2rem] font-bold'>Cultivating Character and Values:</h4> <br />

              At Arafa International School, the faculty is not just concerned with academic prowess; they are sculptors of character. By imparting values such as integrity, empathy, and resilience, they contribute to the formation of well-rounded individuals. Through their own example, they instill a sense of responsibility, nurturing students who not only excel in their studies but also contribute meaningfully to society.
              <h4 className='mt-[2rem] font-bold'>Embracing Innovation:</h4> <br />

              In a rapidly evolving world, our faculty members at Arafa International School are at the forefront of educational innovation. They embrace modern teaching methodologies, integrating technology to enhance the learning experience. By staying abreast of the latest advancements in their fields, they prepare students for the challenges and opportunities of an ever-changing global landscape.
              <h4 className='mt-[2rem] font-bold'>A Legacy of Impact:</h4> <br />

              The impact of exceptional faculty at Arafa International School extends far beyond the confines of the academic year. Alumni often reflect on the profound influence that educators had on their lives. Whether igniting a passion for a subject, providing guidance during challenging times, or simply being a supportive presence, our faculty members create a lasting legacy through the lives they touch.
              <h4 className='mt-[2rem] font-bold'>Conclusion: Shaping Futures, One Student at a Time:</h4> <br />

              In the grand tapestry of education at Arafa International School, the thread of exceptional faculty is woven with care, dedication, and a vision for the future. Our educators stand as catalysts, propelling students toward success and instilling in them the confidence to face the world with resilience and purpose. As we celebrate the exceptional faculty who mold minds and shape futures at Arafa International School, we acknowledge that the impact of their work extends far beyond the classroom, creating a ripple effect that shapes the trajectory of countless lives.
            </p>

            <h2 className="text-xl  text-gray-400 md:text-2xl lg:text-3xl font-bold my-8 leading-tight">
              Holistic Education
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Beyond textbooks, we recognize the importance of nurturing the overall development of our students. Our curriculum
              extends beyond academics, incorporating a wide array of extracurricular activities, cultural programs, and community
              service initiatives.
            </p>

            <h2 className="text-xl text-gray-400 md:text-2xl lg:text-3xl font-bold my-8 leading-tight">
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Arafa International School provides a conducive learning environment with state-of-the-art facilities. From
              well-equipped classrooms to cutting-edge laboratories and extensive sports amenities, we ensure that our students
              have access to the resources they need for a comprehensive educational experience.
            </p>

            <h2 className="text-xl text-gray-400 md:text-2xl lg:text-3xl font-bold my-8 leading-tight">
              Community and Collaboration
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Education is a collaborative effort, and at Arafa International School, we value the partnership between parents,
              teachers, and students. Our community-focused approach creates a supportive network where everyone plays a role in
              the well-being and growth of each student.
            </p>

            <h2 className="text-xl text-gray-400 md:text-2xl lg:text-3xl font-bold my-8 leading-tight">
              Explore Arafa International School
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              As you navigate through our website, explore the academic programs, extracurricular activities, and vibrant community
              spirit that define Arafa International School. Whether you are a prospective student, parent, or educator, we invite
              you to discover the dynamic learning environment that awaits you.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              Thank you for considering Arafa International School for your educational journey. We look forward to being a part
              of your academic and personal growth.
            </p>

            <p className="text-lg mb-4 font-bold">Warm regards,</p>
            <p className="text-lg text-gray-400">Mr: Yaseen /Head of School<br />Arafa International School</p>
          </div>
        </div>
      </div>
    </section>

  );
};

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {icon}
      <h3 className="text-lg font-bold mt-4 mb-2 text-[#163269]">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const infoItems = [
  {
    title: 'Experienced Faculty',
    description: 'Our teachers bring a wealth of expertise and dedication to ensure the success of each student.',
    icon: <FaChalkboardTeacher className="text-4xl text-indigo-600 mb-4" />,
  },
  {
    title: 'Modern Facilities',
    description: 'State-of-the-art classrooms, labs, and recreational spaces provide an optimal learning environment.',
    icon: <FaRegBuilding className="text-4xl text-green-600 mb-4" />,
  },
  {
    title: 'Community Engagement',
    description: 'A collaborative approach involving parents, teachers, and students for a supportive learning environment.',
    icon: <FaHandsHelping className="text-4xl text-blue-600 mb-4" />,
  },
  {
    title: 'Global Perspective',
    description: 'Our curriculum prepares students for a global society, fostering diversity and an international mindset.',
    icon: <FaGlobe className="text-4xl text-yellow-600 mb-4" />,
  },
  {
    title: 'Values-Centric Education',
    description: 'Instilling strong values, character development, and a sense of responsibility in every student.',
    icon: <FaHeart className="text-4xl text-red-600 mb-4" />,
  },
  {
    title: 'Inclusive Learning',
    description: 'Our commitment to diversity ensures an inclusive learning environment that celebrates individual strengths.',
    icon: <FaUsers className="text-4xl text-purple-600 mb-4" />,
  },
];

export default AboutUsPage;
