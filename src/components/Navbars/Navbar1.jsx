import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [selectedSocialMedia, setSelectedSocialMedia] = useState('');

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};

const handleSocialMediaChange = (value) => {
setSelectedSocialMedia(value);
setIsMenuOpen(false); // Close the menu when a social media option is selected
// Additional logic based on the selected social media can be added here
};

return (
<nav
  className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />

    </Link>


    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-sticky" type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get started
      </button>
      <button data-collapse-toggle="navbar-sticky" type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky" aria-expanded={isMenuOpen} onClick={toggleMenu}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'
      }`} id="navbar-sticky">
      <ul
        className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

        <Link to="/arfa/hero" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            ">
        Home
        </Link>
        <Link to="/arfa/courses" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            ">
        Courses
        </Link>
        <Link to="/arfa/admission" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            ">
        Admission
        </Link>
        <Link to="/arfa/fee" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            ">
        Fee
        </Link>
        <Link to="/arfa/contact" className="block py-2 px-3 text-gray-900 rounded
         hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
          md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
          dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            ">
        Contact
        </Link>

        <li className="relative group">
          <button type="button"
            className="flex items-center block py-2 px-3 text-gray-900 rounded
            hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
             md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
             dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            onClick={toggleMenu}>
            Social Media
            <svg className={`w-4 h-4 ml-1 text-gray-500 dark:text-gray-400 group-hover:text-gray-700
              dark:group-hover:text-white transition-transform duration-300 transform ${ isMenuOpen ? 'rotate-180' : ''
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isMenuOpen && (
          <div className="absolute z-10 -ml-4 mt-2 transform px-2 w-screen max-w-xs sm:px-0">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white p-5">
                <button onClick={()=> handleSocialMediaChange('YouTube')}
                  className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 focus:outline-none
                  focus:ring-2 focus:ring-gray-200"
                  >
                  YouTube
                </button>
                <button onClick={()=> handleSocialMediaChange('Facebook')}
                  className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 focus:outline-none
                  focus:ring-2 focus:ring-gray-200"
                  >
                  Facebook
                </button>
                <button onClick={()=> handleSocialMediaChange('Instagram')}
                  className="flex items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 focus:outline-none
                  focus:ring-2 focus:ring-gray-200"
                  >
                  Instagram
                </button>
              </div>
            </div>
          </div>
          )}
        </li>
      </ul>
    </div>
  </div>
</nav>
);
};

export default Navbar;