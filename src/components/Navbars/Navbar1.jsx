import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "./AIS-removebg-preview.png";
import userAvatar from '../../assets/images/avatar.png'


import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { MdPersonPin } from "react-icons/md";
import { RiPagesFill, RiAdminFill } from "react-icons/ri";
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const CHANNEL_ID = 'UCEsefwwmj2PrQBmVVsWDTeQ';
  const userData = localStorage.getItem("USER");
  let currentUser = null;
  let isAdmin = false;
  if (userData) {
    currentUser = JSON.parse(userData);
    isAdmin = currentUser.isAdmin;
  }
  const subscribeToChannel = () => {
    // Open the YouTube subscribe URL in a new tab
    window.open(`https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1`);
  };



  const closeMenu = () => {
    setOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeadmin = () => {
    setIsAdminOpen(false);
  };
  const toggleAdmin = () => {
    setIsAdminOpen(!isAdminOpen);
  };
  const togglePages = () => {
    setIsPagesOpen(!isPagesOpen);
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

  return (
    <nav className="dark:bg-gray-900 border-gray-200 dark:border-gray-600 w-full border-b bg-white start-0 sticky fixed top-0 z-20 " aria-controls="navbar-sticky">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between  md:p-1 lg:p-1">
        <div className="z-50  md:w-auto w-full flex justify-between">
          <Link
            to="/arfa/hero"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo2} className="h-12" alt="Arafa Logo" />
          </Link>

          <div className="text-4xl text-center justify-center mt-[0.7rem]  md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 ">
          <li>
            <Link
              to="/arfa/hero"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            >
             Home
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/arfa/admission"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            >
               Admission
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
            </Link>
          </li>

          <li>
            <Link
              to="/arfa/Blog"
              onClick={closeMenu}
              className="text-lg f uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            >
              Blog
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/arfa/contact"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
              
            >
              Contact 
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>

            </Link>
          </li>
          <li>
            <Link
              to="/arfa/aboutus"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
             
            >
              about 
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>

            </Link>
          </li>
          <li>
            <Link
              to="/arfa/courses"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            
            >
              Courses
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>

            </Link>
          </li>
          <li>
            <Link
              to="/arfa/allimges"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
             
            >
               Gallary
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>

            </Link>
          </li>



          <li className="group relative">
            <button
              type="button"
              className="uppercase text-lg bold text-gray-400 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block flex items-center rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
              onClick={toggleDropdown}
            >
               Social Media
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

                      className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                    >
                      <  FaFacebook className="inline-block mr-2" />   Facebook
                    </button>
                    <button

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
                Admin
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
                        to="/addfaq" onClick={closeMenu}
                        className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Add FAQ
                      </Link>
                      <Link
                        to="/arfa/addblog" onClick={closeMenu}
                        className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Add Blog
                      </Link>


                      <Link
                        to="/arfa/uplodeimges" onClick={closeMenu}
                        className="text-gray-400 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Add Gallary
                      </Link>
                      <Link
                        to="/arfa/admissiondata" onClick={closeMenu}
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
        </ul>
        <div className="md:block hidden">
          <div className="group relative">
            {currentUser ? (
              <Link>
                <button
                  data-collapse-toggle="navbar-sticky"
                  className="bg-indigo-500 uppercase text-white py-2 px-4 rounded-md hover:bg-indigo-700"

                  onClick={logout}
                >
                  Sign Out
                </button>

              </Link>


            ) : (
              <Link to="/login" className="group relative">
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="bg-indigo-500 uppercase text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Sign In
                </button>

              </Link>
            )}
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
    md:hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600 w-full border-b bg-white gap-x-[6rem] fixed w-[70%] top-0 overflow-y-auto bottom-0 py-6 pl-4
    duration-500 ${open ? "right-0" : "right-[-100%]"}
  `}
          style={{ marginTop: "52px" }} // Add this style to create space
        >

          <li>


        




    <div className="flex items-center mb-3 gap-3">
        <img className="rounded-full h-12" src={currentUser ? currentUser.photoURL : userAvatar} alt="user profile" />
        <div className="mt">
            <span className="text-sm font-medium text-gray-400">{currentUser ? currentUser.displayName : " User"}</span>
             <p className="mt- text-xs font-semibold text-orange-600">Premium User</p>
        </div>
    </div>



            <Link
              to="/arfa/hero"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            >
              <FaHome className="inline-block mr-2" /> Home
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/arfa/admission"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            >
              <FaUserGraduate className="inline-block mr-2" /> Admission
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
            </Link>
          </li>

          <li>
            <Link
              to="/arfa/Blog"
              onClick={closeMenu}
              className="text-lg f uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
            >
              <FaBlog className="inline-block mr-2" /> Blog
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/arfa/contact"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
              
            >
               <FaHome className="inline-block mr-2" /> Contact
            </Link>
          </li>
          <li>
            <Link
              to="/arfa/aboutus"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
              
            >
               <FaHome className="inline-block mr-2" /> about
            </Link>
          </li>
          <li>
            <Link
              to="/arfa/courses"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
             
            >
               <FaHome className="inline-block mr-2" /> Courses
              <div className="h-1.5 bg-green-500 w-full absolute bottom--2 left-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>

            </Link>
          </li>
          <li>
            <Link
              to="/arfa/allimges"
              onClick={closeMenu}
              className="text-lg  uppercase text-gray-400 relative hover:text-green-500 inline-block py-2 px-3 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 group"
              
            >
               <FaHome className="inline-block mr-2" /> Gallary
            </Link>
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
            
            {isDropdownOpen && (
              <div className="absolute z-10 -ml-4 mt-2 w-screen max-w-xs transform px-2 sm:px-0">
                <div className="ring-b overflow-hidden rounded-lg  ring-opacit">
                  <div className="relative grid gap-6 bg-white p-5">
                    <button
                      className="text-gray-400  text-lg hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      onClick={subscribeToChannel}
                    >
                      < FaYoutube className="inline-block mr-2" />  Youtube
                    </button>
                    <button

                      className="text-gray-400 text-lg hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                    >
                      <  FaFacebook className="inline-block mr-2" />   Facebook
                    </button>
                    <button

                      className="text-gray-400 text-lg hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
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
                  <FaHome className="inline-block mr-2" /> Admin
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
              
              {isAdminOpen && (
                <div className="absolute z-10 -ml-4 mt-2 w-screen max-w-xs transform px-2 sm:px-0">
                  <div className=" overflow-hidden rounded-lg shadow-lg ">
                    <div className="relative grid gap-6 bg-white p-5">
                      <Link
                        to="/addfaq" onClick={closeMenu}
                        className="text-gray-400 text-lg  hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Add FAQ
                      </Link>
                      <Link
                        to="/arfa/addblog" onClick={closeMenu}
                        className="text-gray-400 text-lg hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Add Blog
                      </Link>


                      <Link
                        to="/arfa/uplodeimges" onClick={closeMenu}
                        className="text-gray-400 text-lg  hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Add Gallary
                      </Link>
                      <Link
                        to="/arfa/admissiondata" onClick={closeMenu}
                        className="text-gray-400 text-lg hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Admission
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
          )}

          <div className="py-5 p-4">
            <div className="group relative">
              {currentUser ? (
                <Link>
                  <button
                    data-collapse-toggle="navbar-sticky"
                    className="bg-indigo-500 text-white py-2 px-4 w-full rounded-md hover:bg-indigo-700"

                    onClick={logout}
                  >
                    Sign Out
                  </button>

                </Link>


              ) : (
                <Link to="/login" className="group relative">
                  <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="bg-indigo-500 text-white py-2 px-4 w-full rounded-md hover:bg-indigo-700"
                  >
                    Sign In
                  </button>

                </Link>
              )}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
