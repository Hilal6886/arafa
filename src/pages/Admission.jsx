// src/Admission.js
import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaUserGraduate } from "react-icons/fa";

const Admission = () => {
  return (
    <div className="mt-[90px] flex h-screen items-center justify-center md:mt-[100px]">
      <div className="max-w-md rounded-md bg-gradient-to-r from-blue-300 to-purple-400 p-8 text-white shadow-lg">
        <div className="mb-6 text-center text-3xl font-bold">
          Admission Enquiry Form
        </div>
        <form className="-mx-2 flex flex-wrap">
          <div className="mb-4 w-full px-2 md:w-1/2">
            <label htmlFor="parentName" className="mb-2 block ">
              Parent Name:
            </label>
            <div className="relative rounded-md bg-white bg-opacity-30 p-2">
              <FaUser className="absolute top-2 left-3 text-white" />
              <input
                type="text"
                id="parentName"
                name="parentName"
                className="bg-transparent w-full border-none p-2 text-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4 w-full px-2 md:w-1/2">
            <label htmlFor="email" className="mb-2 block">
              Email:
            </label>
            <div className="relative rounded-md bg-white bg-opacity-30 p-2">
              <FaEnvelope className="absolute top-2 left-3 text-white" />
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent w-full border-none p-2 text-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4 w-full px-2 md:w-1/2">
            <label htmlFor="phone" className="mb-2 block">
              Phone No:
            </label>
            <div className="relative rounded-md bg-white bg-opacity-30 p-2">
              <FaPhone className="absolute top-2 left-3 text-white" />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="bg-transparent w-full border-none p-2 text-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4 w-full px-2 md:w-1/2">
            <label htmlFor="studentName" className="mb-2 block">
              Student Name:
            </label>
            <div className="relative rounded-md bg-white bg-opacity-30 p-2">
              <FaUserGraduate className="absolute top-2 left-3 text-white" />
              <input
                type="text"
                id="studentName"
                name="studentName"
                className="bg-transparent w-full border-none p-2 text-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4 w-full px-2">
            <label htmlFor="grade" className="mb-2 block">
              Looking for Grade:
            </label>
            <div className="relative rounded-md bg-white bg-opacity-30 p-2">
              <select
                id="grade"
                name="grade"
                className="text-black w-full  border-none bg-white bg-opacity-30 p-2 focus:outline-none"
              >
                <option value="Daycare" className="text-Heart-600 font-bold text-xl">Daycare</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="FullTimeHifz" className="text-Heart-600 bold">Full Time Hifz</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
                <option value="PreNursery" className="text-Heart-600 bold">Pre Nursery</option>
              </select>
            </div>
          </div>
          <div className="mb-4 w-full px-2">
            <label htmlFor="hearAboutUs" className="mb-2 block">
              Where did you hear about us:
            </label>
            <div className="relative rounded-md bg-white bg-opacity-30 p-2">
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                className="w-full border-none bg-white bg-opacity-30 p-2 text-Heart-500 focus:outline-none "
              >
                <option value="Facebook" className="text-Heart-600 bold">Facebook</option>
                <option value="Instagram" className="text-Heart-600 bold">Instagram</option>
                <option value="Google" className="text-Heart-600 bold">Google</option>
                <option value="Friends" className="text-Heart-600 bold">Friends and Acquaintance</option>
                <option value="Linkedin" className="text-Heart-600 bold">Linkedin</option>
                <option value="Other" className="text-Heart-600 bold">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-4 w-full px-2 text-center">
            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
