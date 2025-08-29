import React from "react";
import { useLocation } from "react-router-dom";

const HomeSlider = () => {
  const location = useLocation();

  // केवल home page ("/") पर slider दिखेगा
  if (location.pathname !== "/") {
    return null;
  }

  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/1200/500?random=1",
      text: "Welcome to Our Website",
    },
    {
      id: 2,
      image: "https://picsum.photos/1200/500?random=2",
      text: "Explore Our Services",
    },
    {
      id: 3,
      image: "https://picsum.photos/1200/500?random=3",
      text: "Get in Touch Today",
    },
  ];

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white animate-fadeIn">
              {slide.text}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
