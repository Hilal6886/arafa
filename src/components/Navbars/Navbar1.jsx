import React, { useState } from "react";
import logo2 from "./AIS-removebg-preview.png";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaUserGraduate,
  FaMoneyBillWave,
  FaBlog,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaSignInAlt,
  FaSignOutAlt,
  FaYoutube,
} from 'react-icons/fa';
import { MdPersonPin } from "react-icons/md";
import { RiPagesFill,RiAdminFill } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = (user) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [selectedAdmin, setSelectedAdmin] = useState("");
  const CHANNEL_ID = 'UCEsefwwmj2PrQBmVVsWDTeQ';

  const userData = localStorage.getItem("USER");
  let currentUser = null;
  let isAdmin = false;
  if (userData) {
    currentUser = JSON.parse(userData);
    isAdmin = currentUser.isAdmin;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
    setIsAdminOpen(false);
    setIsPagesOpen(false);
    
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleAdmin = () => {
    setIsAdminOpen(!isAdminOpen);
  };
  const togglePages = () => {
    setIsPagesOpen(!isPagesOpen);
  };

  const handleSocialMediaChange = (value) => {
    setSelectedSocialMedia(value);
    setIsDropdownOpen(false);
    // Additional logic based on the selected social media can be added here
  };
  const handleAdminChange = (value) => {
    setSelectedAdmin(value);
    setIsAdminOpen(false);
    // Additional logic based on the selected social media can be added here
  };
  const logout = () => {
    console.log("LOGIINNNGput");
    signOut(auth)
      .then(() => {
        console.log("logout sucessfully");
        localStorage.removeItem("USER");
        window.location.reload(); //location.reload()
        //    toast.success('logged out')
      })
      .catch((err) => {
        console.log("errror", err);
        // toast.error(err.message)
      });
  };
  const subscribeToChannel = () => {
    // Open the YouTube subscribe URL in a new tab
    window.open(`https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1`);
  };

  return (
    <nav className="dark:bg-gray-900 border-gray-200 dark:border-gray-600 fixed top-0 z-20 w-full border-b bg-white start-0">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-1">
        <Link
          to="/arfa/hero"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo2} className="h-12" alt="Arafa Logo" />
        </Link>
  
        <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className=" items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
  
        <div
          className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${isMenuOpen ? "block" : "hidden"
            }`}
          id="navbar-sticky"
        >
          <ul className="border-gray-400 bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mt-4 flex flex-col rounded-lg border p-4 font-medium rtl:space-x-reverse md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0">
            <Link
              to="/arfa/hero"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            >
              <FaHome className="inline-block mr-2" /> Home
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
            </Link>
          
            <Link
              to="/arfa/admission"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            >
              <FaUserGraduate className="inline-block mr-2" /> Admission
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
            </Link>
          
            <Link
              to="/arfa/Blog"
              onClick={closeMenu}
              className="text-lg f uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            >
              <FaBlog className="inline-block mr-2" /> Blog
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
            </Link>
         
               <li className="group relative">
                <button
                  type="button"
                  className="uppercase text-lg bold text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block flex items-center rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
                  onClick={togglePages}
                >
              < RiPagesFill className="inline-block mr-2" /> Pages
                  <svg
                    className={`text-gray-500 dark:text-gray-400 group-hover:text-gray-700 ml-1 h-4 w-4 transform transition-transform duration-300 dark:group-hover:text-white ${isPagesOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
                {isPagesOpen && (
                  <div className="absolute z-10 -ml-4 mt-2 w-screen max-w-xs transform px-2 sm:px-0">
                    <div className="ring-black overflow-hidden rounded-lg shadow-lg ring-1 ring-opacity-5">
                      <div className="relative grid gap-6 bg-white p-5">
                      <Link
                            to="/arfa/contact"
                            onClick={closeMenu}
                            className="text-gray-400 uppercase hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                          >
                            Contact US
                          </Link>
                          <Link
                         to="/arfa/aboutus"
                         onClick={closeMenu}
                            className="text-gray-400 uppercase hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                          >
                         about us
                          </Link>
                          <Link
                            to="/arfa/courses"
                            onClick={closeMenu}
                            className="text-gray-400 uppercase hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                          >
                          Our Courses
                          </Link>
                          <Link
                         to="/arfa/allimges"
                         onClick={closeMenu}
                            className="text-gray-400 uppercase hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                          >
                            Campus Gallary
                          </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
  
            <li className="group relative">
                <button
                  type="button"
                  className="uppercase text-lg bold text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block flex items-center rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
                  onClick={toggleDropdown}
                >
                 < MdPersonPin className="inline-block mr-2" /> Social Media
                  <svg
                    className={`text-gray-500 dark:text-gray-400 group-hover:text-gray-700 ml-1 h-4 w-4 transform transition-transform duration-300 dark:group-hover:text-white ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
                {isDropdownOpen && (
                  <div className="absolute z-10 -ml-4 mt-2 w-screen max-w-xs transform px-2 sm:px-0">
                    <div className="ring-black overflow-hidden rounded-lg shadow-lg ring-1 ring-opacity-5">
                      <div className="relative grid gap-6 bg-white p-5">
                        <button
                           className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                          onClick={subscribeToChannel}
                        >
                           < FaYoutube className="inline-block mr-2" />  Youtube
                        </button>
                        <button
                          onClick={() => handleSocialMediaChange("Facebook")}
                          className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                        >
                          <  FaFacebook className="inline-block mr-2" />   Facebook
                        </button>
                        <button
                          onClick={() => handleSocialMediaChange("Instagram")}
                          className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                        >
                          < FaInstagram className="inline-block mr-2" /> Instagram
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {isAdmin && (
                <li className="group relative">
                  <button
                    type="button"
                    className="uppercase text-lg bold text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block flex items-center rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
                    onClick={toggleAdmin}
                  >
                    < RiAdminFill className="inline-block mr-2" /> Admin
                    <svg
                      className={`text-gray-400 dark:text-gray-400 group-hover:text-gray-700 ml-1 h-4 w-4 transform transition-transform duration-300 dark:group-hover:text-white ${isAdminOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
                  {isAdminOpen && (
                    <div className="absolute z-10 -ml-4 mt-2 w-screen max-w-xs transform px-2 sm:px-0">
                      <div className="ring-black overflow-hidden rounded-lg shadow-lg ring-1 ring-opacity-5">
                        <div className="relative grid gap-6 bg-white p-5">
                          <Link
                            to="/addfaq"
                            className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                          >
                            Add FAQ
                          </Link>
                          <Link
                            to="/arfa/addblog"
                            className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                          >
                            Add Blog
                          </Link>
  
                         
                          <Link
                            to="/arfa/uplodeimges"
                            className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                          >
                            Add Gallary
                          </Link>
                          <Link
                            to="/arfa/admissiondata"
                            className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                          >
                            Admission 
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              )}
               <div className="uppercase text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500">
                <li>
                  <div className="group relative">
                    {currentUser ? (
                      <Link>
                        <button
                        data-collapse-toggle="navbar-sticky"
                        className="uppercase text-lg bold text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block flex items-center rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
  
                        onClick={logout}
                      >
                        <FaSignOutAlt className="inline-block mr-2" /> Sign Out
                      </button>
                      <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
                      </Link>
                    
                      
                    ) : (
                      <Link to="/login" className="group relative">
                        <button
                          data-collapse-toggle="navbar-sticky"
                          type="button"
                          className="uppercase text-lg bold text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block flex items-center rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
                        >
                          <FaSignInAlt className="inline-block mr-2" /> Sign In
                        </button>
                        <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
                      </Link>
                    )}
                  </div>
  
                </li>
              </div>
          </ul>
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;