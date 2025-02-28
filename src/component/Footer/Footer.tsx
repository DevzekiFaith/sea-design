import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 mr-6 md:mb-0 md:w-1/3 transform transition-transform duration-500 hover:scale-105">
          <Image
            src="/images/s1.jpg"
            alt="Sea Map"
            width={500}
            height={500}
            className="w-[500px] h-[350px]"
          />
        </div>
        <div className="md:w-1/3 text-center mr-6">
          <h2 className="text-2xl font-bold mb-4 transform transition-transform duration-500 hover:translate-y-1">
            Lucktang Int'l Limited
          </h2>
          <p className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
            Revolutionizing the Marine space with cutting-edge solutions for
            modern Water Works.
          </p>
          <p className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
            Contact us: info@lucktang.com
          </p>
          <p className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
            Phone: +123 456 7890
          </p>
          <p className="mb-2 transform transition-transform duration-500 hover:translate-x-1">
            Address: 123 Marine Drive, Ocean City, Country
          </p>
        </div>
        <div className="md:w-1/3 text-center md:text-right mr-[2rem]">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="#" passHref>
              <div className="hover:opacity-75 cursor-pointer">
                <FaFacebookF size={24} />
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="hover:opacity-75 cursor-pointer">
                <FaTwitter size={24} />
              </div>
            </Link>
            <Link href="#" passHref>
              <div className="hover:opacity-75 cursor-pointer">
                <FaLinkedinIn size={24} />
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
