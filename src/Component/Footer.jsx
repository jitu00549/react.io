import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Disclaimer Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Disclaimer</h2>
          <p className="text-sm text-gray-300">
            The information provided on this website is for general 
            informational purposes only. We make no warranties about 
            the accuracy or reliability of the content.
          </p>
        </div>

        {/* Menu Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Menu</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Map Location Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Our Location</h2>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609855665!2d72.74109935840212!3d19.082197838718577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63de04f8a2d%3A0x7f9ed3b3a8cbb2f1!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
            width="100%"
            height="150"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
