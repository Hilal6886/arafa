// Home.js

import React from "react";

import { motion } from "framer-motion";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./AGI.png";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="container mx-auto max-w-screen-lg p-8">
      <img
      src={logo3}
      alt="Arfa School Logo"
      className="mx-auto mb-4 w-[300px]"
    /> 
      
      <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Welcome To Arafa Group Of Institutions
        </h1>

      
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Arfa School Card */}
          <motion.div
            className="rounded-lg bg-white p-6 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={logo1}
              alt="Arfa School Logo"
              className="mx-auto mb-4 w-[160px]"
            />
            <h2
              className="mb -2 text-gray-800
            text-center text-xl font-bold"
            >
              Arfa School
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Providing quality education for a brighter future.
            </p>
            <Link
              to="/arfa/hero"
              className="mx-auto block rounded-md bg-purple-500 px-4 py-2 text-center text-white"
            >
              Visit School
            </Link>
          </motion.div>

          {/* Arfa Digital School Card */}
          <motion.div
            className="rounded-lg bg-white p-6 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={logo2}
              alt="Arfa Digital School Logo"
              className="mx-auto mb-4 w-[140px]"
            />
            <h2 className="text-gray-800 mb-2 text-center text-xl font-bold">
              Arfa Digital School
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              students with digital skills for the modern world.
            </p>
            <Link
              to="/arfaDigital/hero"
              className="mx-auto block rounded-md bg-purple-500 px-4 py-2 text-center text-white"
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
