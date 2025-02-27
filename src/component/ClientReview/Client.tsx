"use client"

import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "Lucktang provided exceptional service and their team was very professional.",
    image: "/images/p1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "I am extremely satisfied with the quality of work delivered by Lucktang.",
    image: "/images/p2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    comment:
      "Their innovative solutions helped our business grow significantly.",
    image: "/images/p3.jpg",
  },
  {
    id: 4,
    name: "James Walker",
    comment:
      "Their innovative solutions helped our business grow significantly.",
    image: "/images/p4.jpg",
  },
  {
    id: 5,
    name: "Micah Waiter",
    comment:
      "Their innovative solutions helped our business grow significantly.",
    image: "/images/p5.jpg",
  },
  // Add more reviews as needed
];

const ClientReview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Client Reviews</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-full bg-black shadow-md p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            title={`Go to review ${index + 1}`}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
