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
    <header className="bg-black text-white p-4 fixed w-full z-50 pt-6 pb-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-[#7BC1FA] cursor-pointer">Lucktang</h1>
        </Link>
        <nav className="hidden md:flex">
          <Link
            href="/"
            className="mr-4 hover:bg-blue-500 w-[80px] p-2 rounded-2xl cursor-pointer text-center"
          >
            <span>Home</span>
          </Link>
          <Link
            href="/about"
            className="mr-4 hover:bg-blue-500 w-[80px] p-2 rounded-2xl cursor-pointer text-center"
          >
            <span>About</span>
          </Link>
          <Link
            href="/services"
            className="mr-4 hover:bg-blue-500 w-[80px] p-2 rounded-2xl cursor-pointer "
          >
            <span>Services</span>
          </Link>
          <Link
            href="/contact"
            className="hover:bg-blue-500 w-[80px] p-2 rounded-2xl cursor-pointer "
          >
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
