import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { GiTeacher } from 'react-icons/gi';
import { MdWorkspacesFilled } from 'react-icons/md';
import { FaBookReader } from 'react-icons/fa';

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="py-12 px-3 lg:px-20 ">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl hed font-bold mb-1 text-gray-800">
          <span className="text-pink-800 hed">About</span> Us
        </h2>
        <p className="text-lg md:text-xl lg:text-xl text-Heart-800 text-center mb-4">
          Fostering Growth, Igniting Passion
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div
          data-aos="zoom-in"
          className="relative overflow-hidden rounded-lg shadow-xl lg:mr-8"
        >
          <img
            className="w-full h-full object-cover object-center"
            src="https://img.freepik.com/free-photo/front-view-little-boy-class-school_23-2148848326.jpg?w=740&t=st=1704663192~exp=1704663792~hmac=f8c9492f070e56c290ab81234eb9c89cdaebef0c7e9741698a0fda820572555c"
            alt=""
          />
        </div>

        <div className="max-w-lg mx-auto lg:order-2">
          <h1 className="text-3xl text-center font-bold text-gray-400 mb-4">
            Our Vision and Mission
          </h1>
          

          <ul className="mt-6 space-y-6 text-[16px] text-Heart-800">
            <li className="flex items-start">
              <GiTeacher className="mt-1 h-5 w-5 flex-none text-gray-400" />
              <span className="ml-3">
                <strong className="font-semibold text-gray-400">Exceptional Faculty:   </strong>
                Our success is powered by a dedicated and highly qualified faculty. With expertise, enthusiasm, and genuine commitment, they ensure the well-being and academic success of each student.
              </span>
            </li>
            <li className="flex items-start">
              <FaBookReader className="mt-1 h-5 w-5 flex-none text-gray-400" />
              <span className="ml-3">
                <strong className="font-semibold text-gray-400">Holistic Education :    </strong>
                Beyond academics, our curriculum fosters well-rounded individuals, emphasizing leadership, teamwork, and social responsibility.
              </span>
            </li>
            <li className="flex items-start">
              <MdWorkspacesFilled className="mt-1 h-5 w-5 flex-none text-gray-400" />
              <span className="ml-3">
                <strong className="font-semibold text-gray-400">Innovative Spaces :     </strong>
                At Arafa International School, our cutting-edge classrooms and facilities inspire dynamic learning experiences, fostering creativity and exploration.
              </span>
            </li>
          </ul>

          <div className="text-center mt-8">
            <Link to="/arfa/aboutus">
              <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
