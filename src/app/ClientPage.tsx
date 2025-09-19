'use client';

import dynamic from 'next/dynamic';
import { motion } from '@/lib/motion';

// Import client components with no SSR
const Header = dynamic(() => import('@/component/Header/Header'), { ssr: false });
const Mission = dynamic(() => import('@/component/Mission/Mission'), { ssr: false });
const Vision = dynamic(() => import('@/component/Vision/Vision'), { ssr: false });
const History = dynamic(() => import('@/component/CompanyHistory/History'), { ssr: false });
const Company = dynamic(() => import('@/component/CompanyOverview/Company'), { ssr: false });
const ClientReview = dynamic(() => import('@/component/ClientReview/Client'), { ssr: false });
const HeroPage = dynamic(() => import('@/component/HeroPage/HeroPage'), { ssr: false });
const Team = dynamic(() => import('@/component/Team/Team'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });
const Partners = dynamic(() => import('@/component/Partners/Partners'), { ssr: false });
const Gas = dynamic(() => import('@/component/Gas/Gas'), { ssr: false });
const BackToTop = dynamic(() => import('@/components/BackToTop'), { ssr: false });

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
    <div className="min-h-screen bg-gray-100 text-slate-800 transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <Header />
      
      <motion.main 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section with Neumorphic Card */}
        <motion.section 
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HeroPage />
        </motion.section>

        {/* Gas Section with Neumorphic Card */}
        <motion.section 
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Gas />
        </motion.section>

        {/* Vision Section with Neumorphic Card */}
        <motion.section 
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Vision />
        </motion.section>

        {/* History Section with Neumorphic Card */}
        <motion.section 
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <History />
        </motion.section>

        {/* Company Section with Neumorphic Card */}
        <motion.section 
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Company />
        </motion.section>

        {/* Mission Section with Neumorphic Card */}
        <motion.section 
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Mission />
        </motion.section>

        {/* Client Reviews with Neumorphic Card */}
        <motion.section 
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ClientReview />
        </motion.section>

        {/* Partners Section with Neumorphic Card */}
        <motion.section 
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Partners />
        </motion.section>

        {/* Team Section with Neumorphic Card */}
        <motion.section 
          className="mb-16 card p-8"
          variants={sectionVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Team />
        </motion.section>
      </motion.main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
