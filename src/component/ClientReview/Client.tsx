"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    comment:
      "Lucktang's LNG solutions have revolutionized our energy infrastructure. Their expertise in liquefied natural gas technology is unmatched, and their commitment to safety and efficiency is exemplary.",
    image: "/images/p1.jpg",
    position: "CEO, Global LNG Solutions",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Thompson",
    comment:
      "The CNG services provided by Lucktang have significantly reduced our operational costs while maintaining the highest environmental standards. Their compressed natural gas solutions are truly innovative.",
    image: "/images/p10.jpg",
    position: "CEO, Clean Energy Corp",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    comment:
      "Working with Lucktang on our PNG pipeline project was exceptional. Their technical expertise and project management capabilities ensured timely delivery and exceeded our expectations.",
    image: "/images/p3.jpg",
    position: "CEO, Pipeline Energy Group",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    comment:
      "Lucktang's comprehensive gas plant operations have been instrumental in our company's growth. Their LNG storage and distribution solutions are world-class and highly reliable.",
    image: "/images/p4.jpg",
    position: "CEO, Advanced Gas Systems",
    rating: 5,
  },
  {
    id: 5,
    name: "Amara Okafor",
    comment:
      "The energy solutions provided by Lucktang have transformed our business operations. Their expertise in both LNG and CNG technologies makes them our preferred partner for all gas-related projects.",
    image: "/images/p5.jpg",
    position: "CEO, Sustainable Energy Ltd",
    rating: 5,
  },
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
    <div className="container mx-auto p-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
        Energy Industry Testimonials
      </h2>
      <div className="relative overflow-hidden w-full max-w-6xl rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-full card p-12 transform 
              transition-transform duration-300 hover:scale-105 hover:shadow-lg h-auto flex flex-col 
              justify-center min-h-[500px]"
            >
              <div className="flex justify-center items-center mb-8">
                <div className="flex items-center flex-col">
                  <div className="mb-6">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={200}
                      height={200}
                      className="rounded-full"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold pt-4 pb-2 text-slate-800">
                      {review.name}
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-lg pb-4 text-slate-600">
                      {review.position}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-8 md:px-12">
                <p className="text-slate-800 text-center text-lg leading-relaxed mb-6">{review.comment}</p>
                <div className="flex justify-center mt-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-2xl mx-1" />
                  ))}
                </div>
              </div>
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
