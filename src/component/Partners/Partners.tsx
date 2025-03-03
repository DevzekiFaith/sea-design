"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";

const partners = [
  { id: 1, src: "/images/logo1.jpg", alt: "Partner 1" },
  { id: 2, src: "/images/logo2.webp", alt: "Partner 2" },
  { id: 3, src: "/images/logo3.png", alt: "Partner 3" },
  { id: 4, src: "/images/logo4.jpg", alt: "Partner 4" },
  { id: 5, src: "/images/logo5.avif", alt: "Partner 5" },
];

const Partners: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Our Partners</h1>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {partners.map((partner) => (
            <div key={partner.id} className="min-w-full flex justify-center items-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              title={`Slide ${index + 1}`}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;