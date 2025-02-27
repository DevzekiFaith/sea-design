import React from "react";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-blue-400 p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Navigation</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/" onClick={onClose}>
            <span className="text-lg text-white hover:underline">Home</span>
          </Link>
          <Link href="/about" onClick={onClose}>
            <span className="text-lg text-white hover:underline">About</span>
          </Link>
          <Link href="/services" onClick={onClose}>
            <span className="text-lg text-white hover:underline">
              Services
            </span>
          </Link>
          <Link href="/contact" onClick={onClose}>
            <span className="text-lg text-white hover:underline">
              Contact
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Modal;
