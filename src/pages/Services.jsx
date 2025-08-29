import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // API Call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6") // dummy API
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10 animate-bounce">
        Our Services
      </h1>

      {loading ? (
        <p className="text-center text-xl">Loading services...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                {service.title.slice(0, 20)}...
              </h2>
              <p className="text-gray-600">{service.body.slice(0, 100)}...</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
