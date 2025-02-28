import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-black p-8 rounded-2xl shadow-lg mt-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 transform transition-transform duration-500 hover:scale-y-105">
          <Image
            src="/images/watermap.jpg"
            alt="Contact Us"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 transform transition-transform duration-500 hover:translate-y-1">
            Contact Us
          </h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-white transform transition-transform duration-500 hover:translate-x-1">
              Contact Address
            </h3>
            <p className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-1">
              <strong>Email Address:</strong>{" "}
              <a
                href="mailto:addluckenergy41@gmail.com"
                className="underline hover:text-gray-300"
              >
                addluckenergy41@gmail.com
              </a>
            </p>
            <p className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-1">
              <strong>Whatsapp 24/7:</strong> +2347063506072
            </p>
            <p className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-1">
              <strong>Head Office:</strong> +33630645197
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-white transform transition-transform duration-500 hover:translate-x-1">
              U.S.A Liaison Office
            </h3>
            <p className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-1">
              3901 East Perkinsville Street, Gilbert, Arizona 85295, United
              States of America.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-white transform transition-transform duration-500 hover:translate-x-1">
              Port Harcourt Operation Base
            </h3>
            <p className="mb-2 text-white transform transition-transform duration-500 hover:translate-x-1">
              Plot 40 Eneka Airport Road, Port Harcourt, Rivers State, Nigeria,
              West Africa.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-white transform transition-transform duration-500 hover:translate-x-1">
              Office Addresses
            </h3>
            <ul className="list-disc list-inside text-white">
              <li className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
                Athens, Greece
              </li>
              <li className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
                Copenhagen, Denmark
              </li>
              <li className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
                Singapore
              </li>
              <li className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
                Seoul, South Korea
              </li>
              <li className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
                Texas, U.S.A
              </li>
              <li className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
                Aberdeen, Scotland
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
