import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-white p-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 mr-6 md:mb-0 md:w-1/3 transform transition-transform duration-500 hover:scale-110">
          <Image
            src="/images/s1.jpg"
            alt="Sea Map"
            width={500}
            height={500}
            className="w-[500px] h-[350px] m-auto"
          />
        </div>
        <div className="md:w-1/3 text-center mr-6">
          <h2 className="text-2xl text-white font-bold mb-4 transform transition-transform duration-500 hover:translate-y-2">
            Lucktang Int&apos;l Limited
          </h2>
          <p className="mb-2 transform transition-transform duration-500 hover:translate-x-2">
            Revolutionizing the Marine space with cutting-edge solutions for
            modern Water Works.
          </p>
          <p className="mb-2 transform transition-transform duration-500 hover:translate-x-2 flex items-center justify-center">
            <FaEnvelope className="mr-2" />
            <a
              href="mailto:info@lucktang.com"
              className="underline hover:text-gray-300"
            >
              addluckenergy41@gmail.com
            </a>
          </p>
          <p className="mb-2 transform transition-transform duration-500 hover:translate-x-2 flex items-center justify-center">
            <FaPhone className="mr-2" />
            +33630645197
          </p>
          <p className="mb-2 transform transition-transform duration-500 hover:translate-x-2 flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2" />
            3901 East Perkinsville Street, Gilbert, Arizona 85295, United States
            of America.
          </p>
        </div>
        <div className="md:w-1/3 text-center md:text-right mr-[2rem]">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="#" passHref>
              <div className="hover:opacity-75 cursor-pointer transform transition-transform duration-500 hover:scale-110">
                <FaFacebookF size={24} />
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="hover:opacity-75 cursor-pointer transform transition-transform duration-500 hover:scale-110">
                <FaTwitter size={24} />
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="hover:opacity-75 cursor-pointer transform transition-transform duration-500 hover:scale-110">
                <FaLinkedinIn size={24} />
              </div>
            </Link>
            <Link href="https://wa.me/2347063506072" passHref>
              <div className="hover:opacity-75 cursor-pointer transform transition-transform duration-500 hover:scale-110">
                <FaWhatsapp size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Lucktang. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
