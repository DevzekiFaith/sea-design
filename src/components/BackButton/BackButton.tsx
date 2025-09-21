'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from '@/lib/motion';
import { FaArrowLeft } from 'react-icons/fa';

interface BackButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'glassmorphic';
}

const BackButton: React.FC<BackButtonProps> = ({ 
  className = '', 
  variant = 'glassmorphic' 
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'secondary':
        return 'bg-slate-600 hover:bg-slate-700 text-white';
      case 'glassmorphic':
      default:
        return 'glassmorphic hover:bg-white/20 text-slate-800';
    }
  };

  return (
    <motion.button
      onClick={handleBack}
      className={`
        fixed top-20 left-4 z-50 p-3 rounded-full shadow-lg
        transition-all duration-300 flex items-center justify-center
        ${getVariantClasses()}
        ${className}
      `}
      whileHover={{ 
        scale: 1.1,
        x: -5
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut"
      }}
      aria-label="Go back"
    >
      <FaArrowLeft size={16} />
    </motion.button>
  );
};

export default BackButton;
