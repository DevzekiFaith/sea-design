import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lucktang</h1>
        <nav>
          <Link href="/">
            <a className="mr-4 hover:underline">Home</a>
          </Link>
          <Link href="/about">
            <a className="mr-4 hover:underline">About</a>
          </Link>
          <Link href="/services">
            <a className="hover:underline">Services</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;