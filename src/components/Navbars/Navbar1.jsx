import React, { useState } from "react";
import logo2 from "./AIS-removebg-preview.png";
import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = (user) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [selectedAdmin, setSelectedAdmin] = useState("");

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
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleAdmin = () => {
    setIsAdminOpen(!isAdminOpen);
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

  return (
    <nav className="dark:bg-gray-900 border-gray-200 dark:border-gray-600 fixed top-0 z-20 w-full border-b bg-white start-0">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo2} className="h-12" alt="Arafa Logo" />
        </Link>

        <div className="flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0">
          {currentUser ? (
            <button
              data-collapse-toggle="navbar-sticky"
              className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
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
          className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="border-gray-100 bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mt-4 flex flex-col rounded-lg border p-4 font-medium rtl:space-x-reverse md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0">
            <Link
              to="/arfa/hero"
              className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              to="/arfa/courses"
              className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
            >
              Courses
            </Link>
            <Link
              to="/arfa/admission"
              className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
            >
              Admission
            </Link>
            <Link
              to="/arfa/fee"
              className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
            >
              Fee
            </Link>
            <Link
            to="/arfa/Blog"
            className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
          >
            Blog
          </Link>
            <Link
              to="/arfa/contact"
              className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
            >
              Contact
            </Link>

            <li className="group relative">
              <button
                type="button"
                className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block flex items-center rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
                onClick={toggleDropdown}
              >
                Social Media
                <svg
                  className={`text-gray-500 dark:text-gray-400 group-hover:text-gray-700 ml-1 h-4 w-4 transform transition-transform duration-300 dark:group-hover:text-white ${
                    isDropdownOpen ? "rotate-180" : ""
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
                  <div className="ring-black overflow-hidden rounded-lg shadow-lg ring-1 ring-opacity-5">
                    <div className="relative grid gap-6 bg-white p-5">
                      <button
                        onClick={() => handleSocialMediaChange("YouTube")}
                        className="text-gray-900 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        YouTube
                      </button>
                      <button
                        onClick={() => handleSocialMediaChange("Facebook")}
                        className="text-gray-900 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Facebook
                      </button>
                      <button
                        onClick={() => handleSocialMediaChange("Instagram")}
                        className="text-gray-900 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Instagram
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
                  className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 block flex items-center rounded py-2 px-3 dark:text-white dark:hover:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500"
                  onClick={toggleAdmin}
                >
                  Admin
                  <svg
                    className={`text-gray-500 dark:text-gray-400 group-hover:text-gray-700 ml-1 h-4 w-4 transform transition-transform duration-300 dark:group-hover:text-white ${
                      isAdminOpen ? "rotate-180" : ""
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
                    <div className="ring-black overflow-hidden rounded-lg shadow-lg ring-1 ring-opacity-5">
                      <div className="relative grid gap-6 bg-white p-5">
                        <Link
                          to="/addfaq"
                          className="text-gray-900 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                        >
                          Add FAQ
                        </Link>
                        <Link
                        to="/arfa/addblog"
                        className="text-gray-900 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                      >
                        Add Blog
                      </Link>
                       
                        <button
                          onClick={() => handleAdminChange("Instagram")}
                          className="text-gray-900 hover:bg-gray-100 focus:ring-gray-200 flex items-center rounded py-2 px-3 focus:outline-none focus:ring-2"
                        >
                          Add Gallary
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
