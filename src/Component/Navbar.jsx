import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full bg-red shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo192.png" alt="Logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold">MyWebsite</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-800 text-center space-y-4 py-4">
          <li><Link to="/" className="block hover:text-yellow-400" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="block hover:text-yellow-400" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/services" className="block hover:text-yellow-400" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className="block hover:text-yellow-400" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
