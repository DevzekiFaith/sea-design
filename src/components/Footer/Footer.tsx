import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from '@/lib/motion';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaShip,
} from "react-icons/fa";

const Footer: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const waveVariants = {
    animate: {
      x: [-5, 5, -5],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.footer 
      className="relative mt-20 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {/* Background with maritime theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-[url('/images/watermap.jpg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
      </div>
      
      {/* Floating maritime elements */}
      <motion.div 
        className="absolute top-10 left-10 w-16 h-16 glassmorphic rounded-full opacity-30" 
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute top-20 right-20 w-12 h-12 glassmorphic-ocean rounded-full opacity-20" 
        variants={waveVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 left-1/4 w-8 h-8 glassmorphic rounded-full opacity-25" 
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <motion.div 
        className="relative z-10 text-white p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Company Image */}
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  duration: 0.3
                }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative glassmorphic-maritime p-4 rounded-3xl">
          <Image
            src="/images/s1.jpg"
                  alt="Maritime Operations"
                  width={400}
                  height={300}
                  className="w-full max-w-[400px] h-[300px] object-cover rounded-2xl"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaShip className="text-white text-sm" />
                </div>
              </div>
            </motion.div>

            {/* Company Info */}
            <motion.div 
              className="text-center space-y-6"
              variants={itemVariants}
            >
              <div className="space-y-4">
                <motion.h2 
                  className="text-3xl font-bold display-font bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Lucktang International Limited
                </motion.h2>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm font-semibold tracking-wider text-blue-300">
                    ENERGY SOLUTIONS
                  </span>
                </div>
        </div>
              
              <motion.p 
                className="text-blue-100 leading-relaxed max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                Providing innovative energy solutions with cutting-edge technology for
                modern LNG and CNG operations.
              </motion.p>

              <div className="space-y-3">
                <motion.div 
                  className="flex items-center justify-center space-x-3 text-blue-200"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-blue-400" />
                  <a
                    href="mailto:addluckenergy41@gmail.com"
                    className="hover:text-white transition-colors duration-300"
            >
              addluckenergy41@gmail.com
            </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center space-x-3 text-blue-200"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-blue-400" />
                  <span>+33630645197</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center justify-center space-x-3 text-blue-200 text-sm"
                  whileHover={{ x: 5 }}
                >
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span className="max-w-xs">
                    3901 East Perkinsville Street, Gilbert, Arizona 85295, USA
                  </span>
                </motion.div>
        </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="text-center space-y-6"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
              >
                Connect With Us
              </motion.h3>
              
              <div className="flex justify-center space-x-6">
                {[
                  { icon: FaFacebookF, href: "#", color: "hover:text-blue-400" },
                  { icon: FaTwitter, href: "#", color: "hover:text-cyan-400" },
                  { icon: FaLinkedinIn, href: "#", color: "hover:text-blue-500" },
                  { icon: FaWhatsapp, href: "https://wa.me/2347063506072", color: "hover:text-green-400" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.5 + (index * 0.1),
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      rotate: 360,
                      transition: { 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 10,
                        duration: 0.4
                      }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href={social.href} passHref>
                      <div className={`w-12 h-12 glassmorphic rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${social.color} hover:shadow-lg hover:shadow-blue-500/25`}>
                        <social.icon size={20} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="glassmorphic-ocean p-4 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm text-blue-200">
                  Follow us for the latest energy industry updates and company news.
                </p>
              </motion.div>
            </motion.div>
              </div>

          {/* Copyright */}
          <motion.div 
            className="text-center mt-12 pt-8 border-t border-white/20"
            variants={itemVariants}
          >
            <p className="text-blue-300">
              &copy; {new Date().getFullYear()} Lucktang International Limited. All rights reserved.
            </p>
            <p className="text-sm text-blue-400 mt-2">
              Delivering Excellence in Energy Solutions
            </p>
          </motion.div>
              </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
