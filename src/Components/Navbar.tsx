import React, { useState } from 'react';
import Logo from '../assets/toyota_logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50 p-1 text-lg m-0">
      <div className="container-sm mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-semibold">
            <Link to="/">
              <div className="container mx-auto">
                <img src={Logo} alt="Logo de Toyosa" className="w-24 h-auto" />
              </div>              
            </Link>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-white hover:text-gray-400">
                Registro
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none" 
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6" 
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
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <ul className="flex flex-col mt-4 space-y-4 md:hidden">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-white hover:text-gray-400">
                Registro
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
