// Home.js

import React from 'react';

import { motion } from 'framer-motion';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './AGI.png';
import { Link } from 'react-router-dom';


const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
 
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-screen-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Arafa Group Of Institutions</h1>
        <img
              src={logo3}
              alt="Arfa School Logo"
              className="w-20 h-20 mx-auto mb-4"
            />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Arfa School Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={logo1}
              alt="Arfa School Logo"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb
            -2 text-center text-gray-800">Arfa School</h2>
            <p className="text-gray-600 mb-4 text-center">
              Providing quality education for a brighter future.
            </p>
            <Link
      to="/arfa/hero"
     
      className="bg-blue-500 text-white text-center px-4 py-2 rounded-md block mx-auto"
    >
      Visit School
    </Link>
          </motion.div>

          {/* Arfa Digital School Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={logo2}
              alt="Arfa Digital School Logo"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2 text-center text-gray-800">Arfa Digital School</h2>
            <p className="text-gray-600 mb-4 text-center">
               students with digital skills for the modern world.
            </p>
            <Link
              to="/arfaDigital/hero"
              className="bg-blue-500 text-white text-center px-4 py-2 rounded-md block mx-auto"
            >
              Visit Digital School
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
