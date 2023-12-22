import React from "react";
import { FaPhone, FaEnvelope,  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {FaSearchLocation } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section>
      <div className="container   mx-auto mt-[67px] p-8">
        <div className="text-center  ">
          <h2
            className="h2 section-title
         mb-[40px]"
          >
            Our <span className="span">Contact Information</span>
          </h2>
        </div>
        {/* Colorful Gradient Card */}
        <div className="flex flex-col justify-between rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 p-8 shadow-md md:flex-row">
          {/* Contact Information */}
          <div className="mb-8 w-full pr-0 text-white md:mb-0 md:w-1/2 md:pr-8">
            <h2 className="mb-4 text-2xl lg:text-[3rem] font-bold">Contact Information</h2>
            <p className="mb-4 ">
              Fill up the form, and our Team will get back to you within 24
              hours.
            </p>
            <div className="mb-4 ">
              <p className="font-bold">
                <FaSearchLocation className="mr-2 inline" />
                Location:
              </p>
              <p>Arafah International School
              #410, 5th main, 3rd Block, H.B.R Layout, Bangalore 560043</p>
            </div>
            <div className="mb-4 ">
              <p className="font-bold">
                <FaPhone className="mr-2 inline" />
                Phone No:
              </p>
              <p>+91 99000 72888 / +91 97411 22897</p>
            </div>
            <div className="mb-4 ">
              <p className="font-bold">
                <FaSearchLocation className="mr-2 inline" />
                Location:
              </p>
              <p>Arafah Kids
              Pettigrove St, Bharati Nagar, Shivaji Nagar, Bengaluru, Karnataka 560001
              </p>
            </div>
            <div className="mb-4  ">
            <p className="font-bold">
              <FaPhone className="mr-2 inline" />
              Phone No:
            </p>
            <p>+91 88613 32623</p>
          </div>
            <div className="mb-4">
              <p className="font-bold">
                <FaEnvelope className="mr-2 inline" />
                Email:
              </p>
              <p>infoalarafah@gmail.com</p>
            </div>
            {/* Add other contact details here */}
            <div className="flex space-x-4">
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 w-full rounded-md border border-blue-400 bg-blue-200 p-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 w-full rounded-md border border-purple-400 bg-purple-200 p-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="PhoneNumber"
                  className="block text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="Phone Number"
                  name="PhonrNumber"
                  className="mt-1 w-full rounded-md border border-purple-400 bg-purple-200 p-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-green-400 bg-green-200 p-2 outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 w-full rounded-md border border-yellow-400 bg-yellow-200 p-2 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-gray-800 hover:bg-gray-200 rounded-md bg-white py-2 px-4 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Live Map */}
        <div className="mt-8">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1350486775395!2d77.62650727410397!3d13.027070813661664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae174738b96479%3A0x9d267fae85981c7!2sARAFAH%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2sin!4v1702906098781!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
