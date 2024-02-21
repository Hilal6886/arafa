import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBook, FaChalkboardTeacher, FaGraduationCap, FaSchool, FaUserGraduate, FaUsers } from 'react-icons/fa';

const CardSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="py-20 text-center">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
        <h2 className="text-2xl font-semibold md:text-3xl">Why Choose Our School?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm">We offer a unique learning experience with the following features:</p>

        <div className="mt-12 grid grid-auto-fit-lg gap-8">
          <div className="grid2-item bg-orange-100 p-6 rounded-lg">
            <FaBook className="text-3xl text-orange-500 mb-4" />
            <h3>Comprehensive Curriculum</h3>
            <p>Our curriculum is designed to provide a well-rounded education, covering a wide range of subjects and topics.</p>
            <a href="#" className="block mt-4 text-blue-500 hover:underline">Learn more</a>
          </div>

          <div className="grid2-item bg-cyan-100 p-6 rounded-lg">
            <FaChalkboardTeacher className="text-3xl text-cyan-500 mb-4" />
            <h3>Experienced Faculty</h3>
            <p>Our dedicated team of experienced teachers is committed to providing high-quality education and support to our students.</p>
            <a href="#" className="block mt-4 text-blue-500 hover:underline">Learn more</a>
          </div>

          <div className="grid2-item bg-purple-100 p-6 rounded-lg">
            <FaGraduationCap className="text-3xl text-purple-500 mb-4" />
            <h3>College Preparation</h3>
            <p>We prepare our students for success beyond high school by offering advanced placement courses and college readiness programs.</p>
            <a href="#" className="block mt-4 text-blue-500 hover:underline">Learn more</a>
          </div>

          <div className="grid2-item bg-sky-100 p-6 rounded-lg">
            <FaSchool className="text-3xl text-sky-500 mb-4" />
            <h3>Modern Facilities</h3>
            <p>Our school is equipped with state-of-the-art facilities and modern technology to enhance the learning environment.</p>
            <a href="#" className="block mt-4 text-blue-500 hover:underline">Learn more</a>
          </div>

          <div className="grid2-item bg-red-100 p-6 rounded-lg">
            <FaUserGraduate className="text-3xl text-red-500 mb-4" />
            <h3>Student Success</h3>
            <p>We prioritize student success and provide personalized support to help each student reach their full potential.</p>
            <a href="#" className="block mt-4 text-blue-500 hover:underline">Learn more</a>
          </div>

          <div className="grid2-item bg-green-100 p-6 rounded-lg">
            <FaUsers className="text-3xl text-green-500 mb-4" />
            <h3>Inclusive Community</h3>
            <p>We foster an inclusive and supportive community where all students feel valued, respected, and empowered.</p>
            <a href="#" className="block mt-4 text-blue-500 hover:underline">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
