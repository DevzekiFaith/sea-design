"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from '@/lib/motion';

const slides = [
  {
    id: 1,
    src: "/images/s6.jpg",
    alt: "Hero Background 1",
    title: "Welcome to Lucktang Intl Limited",
    description:
      "At Lucktang, we are committed to revolutionizing the Marine space with cutting-edge solutions for modern Water Works.",
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
  {
    id: 4,
    src: "/images/pl1.webp",
    alt: "Hero Background 4",
    title: "Excellence in Marine Engineering",
    description:
      "Our expertise in marine engineering ensures the highest standards of quality and safety.",
    statement: "Our Commitment",
    quote:
      "To continuously innovate and improve our services to meet the evolving needs of our clients.",
  },
];

const HeroPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: -1000,
      opacity: 0
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <section className="relative h-screen mt-[6rem] overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              className="z-0"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-cyan-900/80 flex items-center justify-center">
              <motion.div 
                className="text-center text-white p-8 max-w-4xl mx-auto"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                key={currentIndex}
              >
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 display-font"
                  variants={textVariants}
                >
                  {slides[currentIndex].title}
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl mb-6 text-blue-100 max-w-3xl mx-auto leading-relaxed"
                  variants={textVariants}
                >
                  {slides[currentIndex].description}
                </motion.p>
                {slides[currentIndex].statement && (
                  <motion.h3 
                    className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-300"
                    variants={textVariants}
                  >
                    {slides[currentIndex].statement}
                  </motion.h3>
                )}
                {slides[currentIndex].quote && (
                  <motion.p 
                    className="text-lg md:text-xl italic mb-8 text-blue-200 max-w-2xl mx-auto"
                    variants={textVariants}
                  >
                    &ldquo;{slides[currentIndex].quote}&rdquo;
                  </motion.p>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Enhanced Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            title={`Slide ${index + 1}`}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white shadow-lg scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 glassmorphic rounded-full floating opacity-60" />
      <div className="absolute bottom-20 left-20 w-16 h-16 glassmorphic-ocean rounded-full wave opacity-40" />
    </section>
  );
};

export default HeroPage;
