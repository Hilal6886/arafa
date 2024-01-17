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
    <section className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="flex min-h-screen items-center justify-center bg-grey-100 ">
        <div className="container mx-auto max-w-screen-lg p-">
          <img
            src={logo3}
            alt="Arfa School Logo"
            className="mx-auto mb-4 w-[150px] lg:w-[300px]"
          />

          <h1 className="mb-8 text-center text-2xl uppercase lg:text-4xl font-bold ">
            Welcome To Arafa Group Of Institutions
          </h1>


          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Arfa School Card */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring focus:border-blue-300` "
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={logo1}
                alt="Arfa School Logo"
                className="mx-auto mb-4 w-[160px]"
              />

              <p className="text-gray-400 mb-4 text-center">
                Providing quality education for a brighter future.
              </p>

              <Link
                to="/arfa/hero"
                className="mx-auto block rounded-md bg-purple-500 px-4 py-2 text-center text-white"
              >
                Visit School
              </Link>
              <span
                className="mx-auto block rounded-md bg-blue-500 px-[5px] py-[3px] text-center text-white mt-[1rem]" >
                H.B.R Layout
              </span>
            </motion.div>

            {/* Arfa Digital School Card */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring focus:border-blue-300` "
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={logo2}
                alt="Arfa Digital School Logo"
                className="mx-auto mb-4 w-[140px]"
              />

              <p className="text-gray-400 mb-4 text-center">
                students with digital skills for the modern world.
              </p>
              <Link
                to="/arfaDigital/hero"
                className="mx-auto block rounded-md bg-purple-500 px-4 py-2 text-center text-white"
              >
                Visit Digital School
              </Link>
              <span
                className="mx-auto block rounded-md bg-blue-500 px-[5px] py-[3px] text-center text-white mt-[1rem]" >
                UAE INDIA
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Home;
