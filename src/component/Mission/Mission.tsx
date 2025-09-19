import React from "react";

const Mission: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div
        className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl 
        transition-transform duration-500 transform hover:scale-105 
        hover:translate-y-[-10px] max-w-3xl w-full"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400 text-center">
          Our Mission
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Our mission at Lucktang is to deliver high-quality design and
          technology solutions that empower businesses to achieve their goals.
          We strive to exceed our clients expectations through creativity,
          innovation, and a commitment to excellence. We are dedicated to
          fostering a collaborative and inclusive environment where our team can
          thrive and contribute to the success of our clients.
        </p>
      </div>
    </div>
  );
};

export default Mission;
