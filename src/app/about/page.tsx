"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from '@/lib/motion';
import { usePageState } from '@/hooks/usePageState';
import Loading from '@/components/Loading/Loading';
import Error from '@/components/Error/Error';

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });
const BackButton = dynamic(() => import("@/components/BackButton/BackButton"), { ssr: false });

const AboutPage: React.FC = () => {
  const { isLoading, error, retry, goHome } = usePageState({
    initialLoading: true,
    maxRetries: 3
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loading 
          message="Loading About Us..." 
          size="large" 
          variant="pulse" 
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Error
          title="Failed to Load About Page"
          message={error}
          onRetry={retry}
          onGoHome={goHome}
          variant="error"
        />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <BackButton />

      {/* Enhanced Hero Section */}
      <div className="relative h-[70vh] md:h-[90vh] w-full mt-20 overflow-hidden">
        <Image
          src="/images/s5.jpg"
          alt="About Lucktang"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 glassmorphic rounded-full opacity-30"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-16 w-16 h-16 glassmorphic-ocean rounded-full opacity-25"
          animate={{
            x: [-10, 10, -10],
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
          className="absolute bottom-32 left-1/4 w-12 h-12 glassmorphic rounded-full opacity-20"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 8, -8, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <motion.div 
            className="glassmorphic p-12 max-w-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 display-font bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              About Lucktang
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              Delivering innovative energy solutions and exceptional services globally
            </motion.p>
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content with Better Spacing */}
      <div className="container mx-auto px-4 py-16 -mt-16 relative z-10">
        {/* Enhanced Mission Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="card p-8"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative h-96 w-full mb-6 overflow-hidden rounded-2xl">
              <Image
                src="/images/se4.jpg"
                alt="About Lucktang"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl transform transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="card p-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="mb-6">
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <h2 className="text-4xl font-bold mb-6 text-slate-800 card-title">
                Our Mission
              </h2>
            </div>
            
            <div className="space-y-6">
              <motion.p 
                className="text-xl leading-relaxed text-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Welcome to Lucktang, we are a leading energy company dedicated to
                providing innovative solutions and exceptional services to our
                clients globally. Our team of experts is passionate about
                delivering top-tier energy services that meet the unique needs
                of our diverse clientele.
              </motion.p>
              
              <motion.p 
                className="text-xl leading-relaxed text-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                At Lucktang, our mission is to deliver high-quality energy
                services and solutions that empower businesses to achieve their
                goals. We strive to exceed our clients expectations through
                creativity, innovation, and a commitment to excellence in the
                energy industry.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Values Section */}
        <motion.div 
          className="card p-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.h2 
              className="text-5xl font-bold mb-6 text-slate-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The principles that guide everything we do
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "I", title: "Innovation", color: "bg-blue-500", description: "We embrace new ideas and technologies to stay ahead in the energy industry." },
              { icon: "Q", title: "Quality", color: "bg-green-500", description: "We are committed to delivering top-notch energy products and services." },
              { icon: "I", title: "Integrity", color: "bg-purple-500", description: "We conduct our business with honesty and transparency." },
              { icon: "C", title: "Customer Focus", color: "bg-orange-500", description: "We prioritize our clients needs and work closely with them to achieve their vision." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="neumorphic p-8 text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <motion.div 
                  className={`w-20 h-20 ${value.color} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white text-3xl font-bold">{value.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{value.title}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Leadership Team Section */}
        <motion.div 
          className="card p-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.h2 
              className="text-5xl font-bold mb-6 text-slate-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Leadership Team
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Meet the visionaries leading our company forward
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                image: "/images/ceo2 (1).jpg", 
                title: "Chief Executive Officer", 
                role: "CEO", 
                color: "text-blue-600",
                description: "Our CEO brings over 15 years of experience in the energy sector, leading strategic initiatives and driving innovation across our global operations. With a vision for sustainable energy solutions, they guide our company towards excellence in service delivery and technological advancement."
              },
              { 
                image: "/images/coo.jpg", 
                title: "Chief Operating Officer", 
                role: "COO", 
                color: "text-green-600",
                description: "Our COO oversees daily operations and ensures seamless execution of our energy projects. With expertise in operational excellence and process optimization, they maintain the highest standards of quality and efficiency across all our service offerings."
              },
              { 
                image: "/images/md1.jpg", 
                title: "Managing Director", 
                role: "MD", 
                color: "text-purple-600",
                description: "Our Managing Director leads business development and strategic partnerships, driving growth in the energy sector. With extensive experience in international markets, they ensure our company remains at the forefront of industry innovation and client satisfaction."
              }
            ].map((leader, index) => (
              <motion.div 
                key={index}
                className="neumorphic p-8 text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -15,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="relative h-80 w-full mb-8 overflow-hidden rounded-2xl">
                  <Image
                    src={leader.image}
                    alt={leader.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl transform transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-2 text-slate-800"
                  whileHover={{ scale: 1.05 }}
                >
                  {leader.title}
                </motion.h3>
                
                <motion.p 
                  className={`text-xl font-semibold mb-6 ${leader.color}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {leader.role}
                </motion.p>
                
                <p className="text-slate-700 leading-relaxed text-left">
                  {leader.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Team Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="card p-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="mb-8">
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <h2 className="text-4xl font-bold mb-6 text-slate-800 card-title">
                Our Team
              </h2>
            </div>
            
            <motion.div 
              className="glassmorphic p-8 mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="text-xl leading-relaxed text-slate-700">
                Our team is composed of talented professionals with diverse
                backgrounds in energy services, technology, and business. We work
                collaboratively to bring our clients ideas to life and
                ensure their success in the energy industry.
              </p>
            </motion.div>
            
            <motion.div 
              className="neumorphic p-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h4 className="text-2xl font-semibold mb-6 text-slate-800">Why Our Team Excels</h4>
              <ul className="space-y-4 text-slate-700">
                {[
                  "Extensive industry experience",
                  "Continuous professional development", 
                  "Commitment to excellence",
                  "Innovation-driven approach"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="card p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/t2.jpg"
                alt="Our Team"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl transform transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Contact CTA Section */}
        <motion.div 
          className="card p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <motion.h2 
            className="text-5xl font-bold mb-8 text-slate-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>
          
          <motion.div 
            className="glassmorphic p-12 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.p 
              className="text-xl leading-relaxed text-slate-700 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              If you have any questions or would like to learn more about our
              energy services, please feel free to contact us. We look forward to 
              working with you and providing the best energy solutions to meet your needs.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="/contact" 
                className="btn btn-primary px-10 py-5 text-xl transform hover:scale-105 transition duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.a 
                href="/services" 
                className="btn btn-secondary px-10 py-5 text-xl transform hover:scale-105 transition duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
