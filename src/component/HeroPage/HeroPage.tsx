"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    src: "/images/s6.jpg",
    alt: "Hero Background 1",
    title: "Welcome to Lucktang Int&apos;l Limited",
    description:
      "At Lucktang, we are committed to revolutionizing the Marine space with cutting-edge solutions for modern Water Works.",
    statement: "CEO&apos;s Statement",
    quote:
      "At Lucktang, innovation drives everything we do, focusing on delivering the future today.",
  },
  {
    id: 2,
    src: "/images/s7.jpg",
    alt: "Hero Background 2",
    title: "Innovative Marine Solutions",
    description:
      "Providing top-tier maritime services and products that meet the highest industry standards.",
    statement: "Our Vision",
    quote:
      "To build successful and long-lasting relationships based on quality, integrity, commitment, and responsibility.",
  },
  {
    id: 3,
    src: "/images/s10.jpg",
    alt: "Hero Background 3",
    title: "Global Maritime Services",
    description:
      "Delivering world-class services and products to clients wherever they are.",
    statement: "Our Mission",
    quote:
      "To provide the right product, at the right time, and for the right price, while also delivering peace of mind to our clients.",
  },
];

const HeroPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen mt-[6rem]">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-0"
            />
            <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-4">{slide.description}</p>
                <h3 className="text-2xl font-semibold mb-2">
                  {slide.statement}
                </h3>
                <p className="italic mb-4">{slide.quote}</p>
                <Link href="/ceostatement" legacyBehavior>
                  <button className="bg-blue-800 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer">
                    Read CEOs Statement
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            title={`Slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroPage;
