import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
      };

    return (
        <nav className="fixed w-full z-10 bg-transparent ">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">

                    <span className="text-white text-xl font-bold hidden sm:block ">Lokesh Chaudhari</span>
                </div>
                <div className="sm:hidden md:flex space-x-10 mx-10 ">
                    <a href="#home" className="text-white hover:text-gray-300 hover:scale-105 inline-block transform duration-200" >Home</a>
                    <a href="#about" className="text-white hover:text-gray-300  hover:scale-105 inline-block transform duration-200" >About</a>
                    <a href="#experiences" className="text-white hover:text-gray-300  hover:scale-105 inline-block transform duration-200" >Experiences</a>
                    <a href="#projects" className="text-white hover:text-gray-300  hover:scale-105 inline-block transform duration-200" >Projects</a>
                    {/* <a href="#testimonials" className="text-white hover:text-gray-300  hover:scale-105 inline-block transform duration-200" >Testimonials</a> */}
                    <a href="#stats" className="text-white hover:text-gray-300  hover:scale-105 inline-block transform duration-200" >Github</a>
                </div>
                <div className="hidden sm:block ">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-4 bg-black p-4 h-screen md:hidden w-screen">
                    <a href="#home" className="block px-4 py-2 text-white hover:text-gray-300" onClick={handleLinkClick}>Home</a>
                    <a href="#about" className="block px-4 py-2 text-white hover:text-gray-300" onClick={handleLinkClick}>About</a>
                    <a href="#experiences" className="block px-4 py-2 text-white hover:text-gray-300" onClick={handleLinkClick}>Experiences</a>
                    <a href="#projects" className="block px-4 py-2 text-white hover:text-gray-300" onClick={handleLinkClick}>Projects</a>
                    <a href="#stats" className="block px-4 py-2 text-white hover:text-gray-300" onClick={handleLinkClick}>Stats</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
