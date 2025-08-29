import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex flex-col items-center justify-center p-8">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-8 drop-shadow-lg"
      >
        About Us
      </motion.h1>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 max-w-4xl text-center"
      >
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We are a passionate team dedicated to delivering the best digital
          solutions. Our mission is to bring ideas to life through innovation,
          creativity, and technology. With years of experience and a strong
          focus on client satisfaction, we aim to provide services that make a
          difference.
        </p>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-100 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a global leader in delivering innovative and sustainable
              solutions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-100 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Empower businesses with cutting-edge technology and creative
              solutions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-purple-100 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, teamwork, and client satisfaction are at
              our core.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
