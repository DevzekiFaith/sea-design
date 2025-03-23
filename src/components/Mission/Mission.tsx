import React from "react";

const Mission: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <h2 className="text-3xl font-bold mb-4 text-blue-600 animate-fade-in">
        Our Mission
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
        Our mission at Lucktang is to deliver high-quality design and technology
        solutions that empower businesses to achieve their goals. We strive to
        exceed our clients expectations through creativity, innovation, and a
        commitment to excellence. We are dedicated to fostering a collaborative
        and inclusive environment where our team can thrive and contribute to
        the success of our clients.
      </p>
    </div>
  );
};

export default Mission;
