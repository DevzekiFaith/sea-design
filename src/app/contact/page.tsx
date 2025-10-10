"use client";

import React from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import dynamic from "next/dynamic";
import { usePageState } from '@/hooks/usePageState';
import Loading from '@/components/Loading/Loading';
import Error from '@/components/Error/Error';

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });
const BackButton = dynamic(() => import("@/components/BackButton/BackButton"), { ssr: false });

export default function Contact() {
  const { isLoading, error, retry, goHome } = usePageState({
    initialLoading: true,
    maxRetries: 3
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loading 
          message="Loading Contact Information..." 
          size="large" 
          variant="spinner" 
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Error
          title="Failed to Load Contact Page"
          message={error}
          onRetry={retry}
          onGoHome={goHome}
          variant="error"
        />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div>
        <Header />
        <BackButton />
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/images/watermap.jpg"
          alt="Contact Us"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center text-center text-white p-4 pt-[6rem] ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">hello Dear!</h1>
          <p className="text-lg md:text-xl">
            Get in touch with us for inquiries, appointments, and support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8 pt-[6rem]">
        <div>
          <h2 className="text-3xl font-extrabold mt-6 text-center text-balance mb-6 text-blue-600 transform transition-transform duration-500 hover:translate-y-6">
            Contact Us
          </h2>
        </div>
        <div className="bg-black p-8 rounded-2xl shadow-lg mt-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 transform transition-transform duration-500 hover:scale-y-105">
            <div className="w-full h-64 md:h-80 relative">
              <Image
                src="/images/watermap.jpg"
                alt="Contact Us"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-white transform transition-transform duration-500 hover:translate-x-6">
                Contact Address
              </h3>
              <div className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-6 flex items-center">
                <FaEnvelope className="mr-2" />
                <strong>Email:</strong>{" "}
                <div className="underline hover:text-gray-300 cursor-pointer">
                  addluckenergy41@gmail.com
                </div>
              </div>
              <div className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-6 flex items-center">
                <FaEnvelope className="mr-2" />
                <strong>Info Email:</strong>{" "}
                <div className="underline hover:text-gray-300 cursor-pointer">
                  info@lucktangngltd.com
                </div>
              </div>
              <div className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-6 flex items-center">
                <FaWhatsapp className="mr-2" />
                <strong>Whatsapp 24/7:</strong> +2347063506072
              </div>
              <div className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-6 flex items-center">
                <FaPhone className="mr-2" />
                <strong>Head Office:</strong> +33630645197
              </div>
            </div>
            <div className="mb-6 bg-blue-400 p-4 rounded-lg shadow-lg transform transition-transform duration-500 hover:translate-x-6">
              <h3 className="text-2xl font-semibold mb-4 text-black transform transition-transform duration-500 hover:translate-x-6">
                U.S.A Liaison Office
              </h3>
              <div className="mb-2 text-black transform transition-transform duration-500 hover:translate-x-6 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                3901 East Perkinsville Street, Gilbert, Arizona 85295, United
                States of America.
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-white transform transition-transform duration-500 hover:translate-x-6">
                Port Harcourt Operation Base
              </h3>
              <div className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-6 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                Plot 40 Eneka Airport Road, Port Harcourt, Rivers State,
                Nigeria, West Africa.
              </div>
            </div>
            <div className="mb-6 bg-blue-600 rounded-lg p-4">
              <h3 className="text-2xl font-semibold mb-4 text-white transform transition-transform duration-500 hover:translate-x-8">
                Office Addresses
              </h3>
              <ul className="list-disc list-inside text-white">
                <li className="mb-2 transform transition-transform duration-500 hover:translate-x-8">
                  Athens, Greece
                </li>
                <li className="mb-2 transform transition-transform duration-500 hover:translate-x-8">
                  Copenhagen, Denmark
                </li>
                <li className="mb-2 transform transition-transform duration-500 hover:translate-x-8">
                  Singapore
                </li>
                <li className="mb-2 transform transition-transform duration-500 hover:translate-x-8">
                  Seoul, South Korea
                </li>
                <li className="mb-2 transform transition-transform duration-500 hover:translate-x-8">
                  Texas, U.S.A
                </li>
                <li className="mb-2 transform transition-transform duration-500 hover:translate-x-8">
                  Aberdeen, Scotland
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-8 md:space-y-0 md:space-x-8">
          <div className="card p-8 max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 transform transition-transform duration-500 hover:translate-x-6">
              Schedule an Appointment
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-slate-800 mb-2 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-white border-2 border-gray-200 text-slate-800 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-800 mb-2 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-white border-2 border-gray-200 text-slate-800 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-800 mb-2 font-medium" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 rounded-lg bg-white border-2 border-gray-200 text-slate-800 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-800 mb-2 font-medium" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-3 rounded-lg bg-white border-2 border-gray-200 text-slate-800 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-800 mb-2 font-medium" htmlFor="description">
                  Description for Appointment
                </label>
                <textarea
                  id="description"
                  className="w-full p-3 rounded-lg bg-white border-2 border-gray-200 text-slate-800 focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 w-full text-white px-4 py-3 sm:px-6 sm:py-3 
                rounded-full font-semibold text-sm sm:text-base 
                hover:bg-green-700 transition duration-300 transform hover:scale-105"
              >
                Submit Now
              </button>
            </form>
          </div>
          <div className="card p-8 max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 transform transition-transform duration-500 hover:translate-x-6">
              Book an Appointment
            </h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              You can also book an appointment directly using Calendly or Google
              Calendar for your convenience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-5">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 text-center"
              >
                Book with Calendly
              </a>
              <a
                href="https://calendar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105 text-center"
              >
                Book with Google
              </a>
            </div>
          </div>
        </div>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
