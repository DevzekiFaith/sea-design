'use client';

import dynamic from 'next/dynamic';
import { motion } from '@/lib/motion';
import Link from 'next/link';
import Image from 'next/image';

// Import client components with no SSR
const Header = dynamic(() => import('@/component/Header/Header'), { ssr: false });
const ClientReview = dynamic(() => import('@/component/ClientReview/Client'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  }
};

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 transition-colors duration-300">
      <Header />

      <motion.main
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section
          className="mb-16 text-center py-16"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-bold mb-6 text-slate-800 display-font">
            Welcome to Lucktang Intl Limited
          </h1>
          <p className="text-xl mb-8 text-slate-600 max-w-4xl mx-auto">
            Your trusted partner in energy solutions and comprehensive business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <motion.button 
                className="btn btn-primary px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button 
                className="btn btn-secondary px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          className="mb-16"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Our Core Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LNG Services Section */}
            <motion.div
              className="card p-8"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src="/images/lng3.jpeg"
                      alt="LNG Services"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 card-title">LNG Services</h3>
                  <p className="text-lg mb-6 card-content">
                    Delivering innovative and reliable Liquefied Natural Gas solutions for modern energy needs.
                  </p>
                  <Link href="/lng">
                    <motion.button 
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More About LNG
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* CNG Services Section */}
            <motion.div
              className="card p-8"
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src="/images/cng1.jpg"
                      alt="CNG Services"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4 card-title">CNG Services</h3>
                  <p className="text-lg mb-6 card-content">
                    Providing efficient and sustainable Compressed Natural Gas solutions for various applications.
                  </p>
                  <Link href="/cng">
                    <motion.button 
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More About CNG
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Client Reviews Section */}
        <motion.section
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ClientReview />
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}
