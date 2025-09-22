"use client";

import React from 'react';
import { motion } from '@/lib/motion';
import { FaExclamationTriangle, FaRedo, FaHome } from 'react-icons/fa';

interface ErrorProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  onGoHome?: () => void;
  showRetry?: boolean;
  showHome?: boolean;
  variant?: 'error' | 'warning' | 'info';
}

const Error: React.FC<ErrorProps> = ({
  title = "Something went wrong",
  message = "We encountered an unexpected error. Please try again.",
  onRetry,
  onGoHome,
  showRetry = true,
  showHome = true,
  variant = 'error'
}) => {
  const variantStyles = {
    error: {
      icon: FaExclamationTriangle,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    },
    warning: {
      icon: FaExclamationTriangle,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-800',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700'
    },
    info: {
      icon: FaExclamationTriangle,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }
  };

  const styles = variantStyles[variant];
  const IconComponent = styles.icon;

  return (
    <motion.div
      className={`${styles.bgColor} ${styles.borderColor} border-2 rounded-lg p-8 max-w-md mx-auto`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <IconComponent className={`${styles.iconColor} text-4xl mx-auto`} />
        </motion.div>
        
        <motion.h2
          className={`${styles.textColor} text-xl font-bold mb-2`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h2>
        
        <motion.p
          className={`${styles.textColor} text-sm mb-6`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {message}
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {showRetry && onRetry && (
            <motion.button
              onClick={onRetry}
              className={`${styles.buttonColor} text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <FaRedo className="text-sm" />
              Try Again
            </motion.button>
          )}
          
          {showHome && onGoHome && (
            <motion.button
              onClick={onGoHome}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <FaHome className="text-sm" />
              Go Home
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Error;

