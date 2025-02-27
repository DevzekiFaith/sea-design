"use client";

import React, { useState } from "react";
import Link from "next/link";
import Modal from "../Modal/Modal";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lucktang</h1>
        <nav className="hidden md:flex">
          <Link href="/" className="mr-4 hover:underline cursor-pointer">
            <span>Home</span>
          </Link>
          <Link href="/about" className="mr-4 hover:underline cursor-pointer">
            <span>About</span>
          </Link>
          <Link href="/services" className="mr-4 hover:underline cursor-pointer">
            <span>Services</span>
          </Link>
          <Link href="/contact" className="hover:underline cursor-pointer">
            <span>Contact</span>
          </Link>
        </nav>
        <button
          className="md:hidden text-3xl focus:outline-none cursor-pointer"
          onClick={handleModalOpen}
        >
          &#9776;
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
    </header>
  );
};

export default Header;
