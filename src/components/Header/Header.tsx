import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className=" text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lucktang</h1>
        <nav>
          <Link href="/">
            <span className="mr-4 hover:underline">Home</span>
          </Link>
          <Link href="/about">
            <span className="mr-4 hover:underline">About</span>
          </Link>
          <Link href="/services">
            <span className="hover:underline">Services</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;