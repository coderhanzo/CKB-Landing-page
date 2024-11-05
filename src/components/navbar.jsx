// import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="flex justify-center items-center fixed top-0 z-30 bg-transparent shadow-none py-4">
      <div className="flex items-center justify-between max-w-5xl px-4 sm:px-4">
        {" "}
        {/* Centered container */}
        {/* Logo */}
        <div className="flex items-center logo-cbk-cont">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img
              src="src/assets/CBK-imgs/cbklogo.png"
              alt="Logo"
              className="mr-2 inline logo-cbk"
            />
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        {/* <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            {isOpen ? (
              // X Icon
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div> */}
        {/* Desktop Menu */}
        {/* <div className="hidden lg:flex items-center space-x-8">
          <Link to="/about" className="text-gray-800 hover:text-blue-600">
            About
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-blue-600">
            Services
          </Link>
          <Link to="/portfolio" className="text-gray-800 hover:text-blue-600">
            Portfolio
          </Link>
          <Link to="/contact">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
              Contact
            </button>
          </Link>
        </div> */}
        {/* Mobile Dropdown Menu */}
        {/* {isOpen && (
          
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 lg:hidden">
          
            <button
              onClick={toggleMenu}
              className="text-gray-500 absolute top-4 right-4 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 text-2xl"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-blue-600 text-2xl"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-800 hover:text-blue-600 text-2xl"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition duration-200">
                Contact
              </button>
            </Link>
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
