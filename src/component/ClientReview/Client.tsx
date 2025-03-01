"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    name: "James Smith",
    comment:
      "I am extremely satisfied with the quality of work delivered by Lucktang.",
    image: "/images/p10.jpg",
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
    <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Client Reviews</h2>
      <div className="relative overflow-hidden w-[550px] max-w-4xl rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-full bg-black shadow-md p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-96 flex flex-col justify-center"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="flex items-center flex-col">
                  <div>
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={180}
                      height={180}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold pt-10 pb-5">
                      {review.name}
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center">{review.comment}</p>
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
