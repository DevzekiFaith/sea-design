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
  FaIndustry,
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
      scale: 1
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
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-12 h-12 glassmorphic-ocean rounded-full opacity-20"
        animate={{
          x: [-5, 5, -5],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-8 h-8 glassmorphic rounded-full opacity-25"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="relative z-10 text-white p-4 sm:p-6 md:p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center">
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
                <div className="w-full min-w-[280px] max-w-[400px] h-[300px] overflow-hidden rounded-2xl mx-auto relative">
                  <Image
                    src="/images/Gas Plant.jpg"
                    alt="Gas Plant Operations"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                    sizes="(max-width: 480px) 280px, (max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaIndustry className="text-white text-sm" />
                </div>
              </div>
            </motion.div>

            {/* Company Info */}
            <motion.div
              className="text-center space-y-6"
              variants={itemVariants}
            >
              <div className="space-y-3 sm:space-y-4">
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl font-black display-font bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Lucktang International Limited
                </motion.h2>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-300">
                    ENERGY SOLUTIONS
                  </span>
                </div>
              </div>

              <motion.p
                className="text-blue-100 leading-relaxed max-w-md mx-auto text-sm sm:text-base font-medium"
                whileHover={{ scale: 1.02 }}
              >
                Providing innovative energy solutions with cutting-edge technology for
                modern LNG and CNG operations.
              </motion.p>

              <div className="space-y-2 sm:space-y-3">
                <motion.div
                  className="flex items-center justify-center space-x-2 sm:space-x-3 text-blue-200"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-blue-400 text-sm sm:text-base" />
                  <a
                    href="mailto:addluckenergy41@gmail.com"
                    className="hover:text-white transition-colors duration-300 text-xs sm:text-sm font-medium"
                  >
                    addluckenergy41@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center space-x-2 sm:space-x-3 text-blue-200"
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="text-blue-400 text-sm sm:text-base" />
                  <a
                    href="mailto:info@lucktangngltd.com"
                    className="hover:text-white transition-colors duration-300 text-xs sm:text-sm font-medium"
                  >
                    info@lucktangngltd.com
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center space-x-2 sm:space-x-3 text-blue-200"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-blue-400 text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-medium">+23470613506072</span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center space-x-2 sm:space-x-3 text-blue-200"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-blue-400 text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-medium">+2349125283494</span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center space-x-2 sm:space-x-3 text-blue-200 text-xs sm:text-sm"
                  whileHover={{ x: 5 }}
                >
                  <FaMapMarkerAlt className="text-blue-400 text-sm sm:text-base" />
                  <span className="max-w-xs font-medium">
                    2 Thomas Igberaese Close Idi Saba Ebhoiyi Uromi Edo State, Nigeria
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="text-center space-y-4 sm:space-y-6"
              variants={itemVariants}
            >
              <motion.h3
                className="text-lg sm:text-xl md:text-2xl font-black text-white"
                whileHover={{ scale: 1.05 }}
              >
                Connect With Us
              </motion.h3>

              <div className="flex justify-center space-x-4 sm:space-x-6">
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
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 glassmorphic rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${social.color} hover:shadow-lg hover:shadow-blue-500/25`}>
                        <social.icon size={16} className="sm:w-5 sm:h-5" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="glassmorphic-ocean p-3 sm:p-4 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xs sm:text-sm text-blue-200 font-medium">
                  Follow us for the latest energy industry updates and company news.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20"
            variants={itemVariants}
          >
            <p className="text-blue-300 text-sm sm:text-base font-medium">
              &copy; {new Date().getFullYear()} Yonan Technologies. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-blue-400 mt-1 sm:mt-2 font-medium">
              Delivering Excellence in Energy Solutions
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
