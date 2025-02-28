import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white p-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:w-1/3">
          <Image
            src="/images/sea-map.jpg"
            alt="Sea Map"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/3 text-center">
          <h2 className="text-2xl font-bold mb-4">Lucktang Int'l Limited</h2>
          <p className="mb-2">Revolutionizing the Marine space with cutting-edge solutions for modern Water Works.</p>
          <p className="mb-2">Contact us: info@lucktang.com</p>
          <p className="mb-2">Phone: +123 456 7890</p>
          <p className="mb-2">Address: 123 Marine Drive, Ocean City, Country</p>
        </div>
        <div className="md:w-1/3 text-center md:text-right">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="#">
              <Image
                src="/images/facebook-icon.png"
                alt="Facebook"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/twitter-icon.png"
                alt="Twitter"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/linkedin-icon.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
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