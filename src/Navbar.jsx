import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold">MyWebsite</h1>
        </div>

      

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
          {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-lg text-black"
          />
          <button className="bg-yellow-500 px-3 py-1 rounded-lg hover:bg-yellow-600">
            Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 text-center space-y-4 py-4">
         
          <ul className="space-y-4 mt-4">
            <li><Link to="/" className="block hover:text-yellow-400" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="block hover:text-yellow-400" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link to="/services" className="block hover:text-yellow-400" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link to="/contact" className="block hover:text-yellow-400" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
           <div className="flex justify-center space-x-2 px-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded-lg text-black w-2/3"
            />
            <button className="bg-yellow-500 px-3 py-1 rounded-lg hover:bg-yellow-600">
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
