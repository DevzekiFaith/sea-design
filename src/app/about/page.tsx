"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/images/s5.jpg"
          alt="About Lucktang"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-80 flex flex-col items-center justify-center text-center text-white p-4 pt-[8rem]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Lucktang
          </h1>
          <p className="text-lg md:text-xl">
            Delivering innovative marine solutions and exceptional services
            globally.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 md:p-8">
        {/* <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 pt-8">
          About Lucktang
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="p-4 md:p-8 rounded-2xl shadow-lg transform transition-transform duration-500 hover:translate-y-4 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/se4.jpg"
              alt="About Lucktang"
              width={500}
              height={500}
              className="rounded-lg mb-4 m-auto"
            />
          </div>
          <div className="p-4 md:p-8 rounded-2xl shadow-lg transform transition-transform duration-500 hover:translate-y-4 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">
              Our Mission
            </h2>
            <p className="text-lg mb-6 text-white">
              Welcome to Lucktang, We are a leading marine company dedicated to
              providing innovative solutions and exceptional services to our
              clients globally. Our team of experts is passionate about
              delivering top-tier maritime services that meet the unique needs
              of our diverse clientele. From ship chandling to marine logistics,
              we ensure that our clients receive the highest quality services in
              the marine industry.
            </p>
            <p className="text-lg mb-6 text-white">
              At Lucktang, our mission is to deliver high-quality marine
              services and solutions that empower businesses to achieve their
              goals. We strive to exceed our clients expectations through
              creativity, innovation, and a commitment to excellence in the
              marine industry.
            </p>
          </div>
          <div className="p-4 md:p-8 rounded-2xl shadow-lg transform transition-transform duration-500 hover:translate-y-4 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-lg mb-6 text-white">
              <li className="mb-2">
                <strong className="font-extrabold text-2xl">Innovation</strong>{" "}
                <br />{" "}
                <span className="text-blue-400">
                  We embrace new ideas and technologies to stay ahead in the
                  marine industry.
                </span>
              </li>
              <li className="mb-2">
                <strong className="font-extrabold text-2xl">Quality</strong>{" "}
                <br />{" "}
                <span className="text-blue-400">
                  {" "}
                  We are committed to delivering top-notch marine products and
                  services.
                </span>
              </li>
              <li className="mb-2">
                <strong className="font-extrabold text-2xl">Integrity</strong>{" "}
                <br />{" "}
                <span className="text-blue-400">
                  We conduct our business with honesty and transparency.
                </span>
              </li>
              <li className="mb-2">
                <strong className="font-extrabold text-2xl">
                  Customer Focus
                </strong>{" "}
                <br />{" "}
                <span className="text-blue-400">
                  We prioritize our clients needs and work closely with them to
                  achieve their vision.
                </span>
              </li>
            </ul>
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">
              Our Team
            </h2>
            <p className="text-lg mb-6 text-white">
              Our team is composed of talented professionals with diverse
              backgrounds in marine services, technology, and business. We work
              collaboratively to bring our clients&apos; ideas to life and
              ensure their success in the marine industry.
            </p>
          </div>
          <div className="p-4 md:p-8 rounded-2xl shadow-lg transform transition-transform duration-500 hover:translate-y-4 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/t2.jpg"
              alt="Our Team"
              width={500}
              height={300}
              className="rounded-lg mb-4 m-auto"
            />
          </div>
          <div className="p-4 md:p-8 rounded-2xl shadow-lg transform transition-transform duration-500 hover:translate-y-4 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Contact Us
            </h2>
            <p className="text-lg text-white">
              If you have any questions or would like to learn more about our
              services, please feel free to{" "}
              <a href="/contact" className="text-blue-300 hover:underline">
                contact us
              </a>
              . We look forward to working with you and providing the best
              marine services to meet your needs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
