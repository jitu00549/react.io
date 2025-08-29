import React from "react";

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-bounce">
            Welcome to My React Website
          </h1>
          <p className="text-lg mb-6">
            Build modern, fast and responsive web applications with React.js
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">🚀 Fast</h3>
            <p>Lightning fast performance using React.js.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">📱 Responsive</h3>
            <p>Looks great on any device with responsive design.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">⚡ Dynamic</h3>
            <p>Interactive UI with reusable components.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p>Modern websites using React.js & TailwindCSS.</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p>Beautiful and user-friendly interface designs.</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p>Boost visibility and ranking in search engines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <div className="bg-white shadow-lg rounded-xl p-8">
            <p className="italic mb-4">
              "This React website is super fast and responsive. Highly recommend!"
            </p>
            <h4 className="font-semibold">- John Doe</h4>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default Home;
