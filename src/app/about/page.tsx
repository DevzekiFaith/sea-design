"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section with Glassmorphism */}
      <div className="relative h-[60vh] md:h-[80vh] w-full mt-20">
        <Image
          src="/images/s5.jpg"
          alt="About Lucktang"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="glassmorphic p-12 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 display-font">
              About Lucktang
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Delivering innovative energy solutions and exceptional services globally.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8 -mt-20 relative z-10">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card p-8">
            <div className="relative h-80 w-full mb-6 transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/se4.jpg"
                alt="About Lucktang"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="card p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 card-title">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              Welcome to Lucktang, we are a leading energy company dedicated to
              providing innovative solutions and exceptional services to our
              clients globally. Our team of experts is passionate about
              delivering top-tier energy services that meet the unique needs
              of our diverse clientele.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              At Lucktang, our mission is to deliver high-quality energy
              services and solutions that empower businesses to achieve their
              goals. We strive to exceed our clients expectations through
              creativity, innovation, and a commitment to excellence in the
              energy industry.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="card p-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="neumorphic p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Innovation</h3>
              <p className="text-slate-700 text-sm">
                We embrace new ideas and technologies to stay ahead in the energy industry.
              </p>
            </div>
            <div className="neumorphic p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Q</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Quality</h3>
              <p className="text-slate-700 text-sm">
                We are committed to delivering top-notch energy products and services.
              </p>
            </div>
            <div className="neumorphic p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Integrity</h3>
              <p className="text-slate-700 text-sm">
                We conduct our business with honesty and transparency.
              </p>
            </div>
            <div className="neumorphic p-6 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Customer Focus</h3>
              <p className="text-slate-700 text-sm">
                We prioritize our clients needs and work closely with them to achieve their vision.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="card p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 card-title">
              Our Team
            </h2>
            <div className="glassmorphic p-6 mb-6">
              <p className="text-lg leading-relaxed text-slate-700">
                Our team is composed of talented professionals with diverse
                backgrounds in energy services, technology, and business. We work
                collaboratively to bring our clients ideas to life and
                ensure their success in the energy industry.
              </p>
            </div>
            <div className="neumorphic p-6">
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Why Our Team Excels</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Extensive industry experience</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Continuous professional development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Commitment to excellence</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Innovation-driven approach</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card p-8">
            <div className="relative h-80 w-full transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/t2.jpg"
                alt="Our Team"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="card p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800 card-title">
            Get in Touch
          </h2>
          <div className="glassmorphic p-8 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              If you have any questions or would like to learn more about our
              energy services, please feel free to contact us. We look forward to 
              working with you and providing the best energy solutions to meet your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn btn-primary px-8 py-4 text-lg transform hover:scale-105 transition duration-300"
              >
                Contact Us
              </a>
              <a 
                href="/services" 
                className="btn btn-secondary px-8 py-4 text-lg transform hover:scale-105 transition duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
