"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });
const Team = dynamic(() => import("@/component/Team/Team"), { ssr: false });

const AboutPage: React.FC = () => {
  // Scroll functions
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollUp = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const scrollDown = () => {
    const missionSection = document.getElementById('mission-section');
    if (missionSection) {
      missionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({ 
        top: window.innerHeight, 
        behavior: 'smooth' 
      });
    }
  };
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section - Mobile Responsive */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] w-full mt-16 sm:mt-20 overflow-hidden">
        <Image
          src="/images/s5.jpg"
          alt="About Lucktang - Industrial Energy Solutions"
          fill
          style={{ objectFit: "cover" }}
          className="z-0 transform transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 via-gray-300/20 to-gray-400/30 backdrop-blur-sm"></div>
        
        {/* Enhanced Scroll Indicators - Hidden on mobile */}
        <div className="hidden md:flex absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-10 flex-col space-y-4">
          <div 
            onClick={scrollUp}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/40 hover:scale-110 transition-all duration-300 group"
            title="Scroll to top"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:text-blue-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
          <div 
            onClick={scrollDown}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/40 hover:scale-110 transition-all duration-300 group"
            title="Scroll down"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:text-blue-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 md:mb-8 text-white drop-shadow-lg transform transition-all duration-1000 hover:scale-105">
              About Lucktang
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/90 drop-shadow-md mb-6 sm:mb-8 font-semibold">
              Delivering innovative energy solutions and exceptional services globally.
            </p>
            {/* Animated scroll indicator */}
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-sm sm:text-base text-white/80 font-medium">Scroll to explore</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Mobile Responsive */}
      <div className="container mx-auto p-4 sm:p-6 md:p-8 -mt-10 sm:-mt-16 md:-mt-20 relative z-10">
        {/* Mission Section */}
        <div id="mission-section" className="mb-12 sm:mb-16 md:mb-20">
          <div className="neumorphic p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl transform transition-all duration-500 hover:shadow-xl">
            <div className="relative">
              {/* Scroll Indicator - Hidden on mobile */}
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4">
                <div 
                  onClick={() => scrollToSection('values-section')}
                  className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300"
                  title="Go to Values section"
                >
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-gray-900 text-center">
                Our Mission
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="neumorphic p-3 sm:p-4 rounded-xl order-2 lg:order-1">
                  <div className="relative h-64 sm:h-72 md:h-80 w-full transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src="/images/se4.jpg"
                      alt="About Lucktang"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="glassmorphic p-4 sm:p-6 md:p-8 rounded-xl space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                    Welcome to Lucktang, we are a leading energy company dedicated to
                    providing innovative solutions and exceptional services to our
                    clients globally. Our team of experts is passionate about
                    delivering top-tier energy services that meet the unique needs
                    of our diverse clientele.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                    At Lucktang, our mission is to deliver high-quality energy
                    services and solutions that empower businesses to achieve their
                    goals. We strive to exceed our clients expectations through
                    creativity, innovation, and a commitment to excellence in the
                    energy industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section - Mobile Responsive */}
        <div id="values-section" className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="relative">
            {/* Scroll Indicator - Hidden on mobile */}
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4">
              <div 
                onClick={() => scrollToSection('team-section')}
                className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300"
                title="Go to Team section"
              >
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="neumorphic p-4 sm:p-6 md:p-8 rounded-xl text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-black">I</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900">Innovation</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                  We embrace new ideas and technologies to stay ahead in the energy industry.
                </p>
              </div>
              <div className="neumorphic p-4 sm:p-6 md:p-8 rounded-xl text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-black">Q</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900">Quality</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                  We are committed to delivering top-notch energy products and services.
                </p>
              </div>
              <div className="neumorphic p-4 sm:p-6 md:p-8 rounded-xl text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-black">I</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900">Integrity</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                  We conduct our business with honesty and transparency.
                </p>
              </div>
              <div className="neumorphic p-4 sm:p-6 md:p-8 rounded-xl text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-black">C</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900">Customer Focus</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                  We prioritize our clients needs and work closely with them to achieve their vision.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div id="team-section">
          <Team />
        </div>

        {/* Why Our Team Excels Section - Mobile Responsive */}
        <div id="team-excels-section" className="mb-12 sm:mb-16 md:mb-20">
          <div className="neumorphic p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl transform transition-all duration-500 hover:shadow-xl">
            <div className="relative">
              {/* Scroll Indicator - Hidden on mobile */}
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4">
                <div 
                  onClick={() => scrollToSection('contact-section')}
                  className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300"
                  title="Go to Contact section"
                >
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-gray-900 text-center">
                Why Our Team Excels
              </h2>
              
              {/* Flex Layout with Image and Content */}
              <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 items-start">
                {/* Team Image */}
                <div className="flex-1 w-full">
                  <div className="neumorphic p-3 sm:p-4 md:p-6 rounded-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl group">
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-xl">
                      <Image
                        src="/images/t2.jpg"
                        alt="Our Professional Team"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl shadow-lg transform transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                      {/* Floating badge */}
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-xs sm:text-sm font-black text-blue-600">Professional Team</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 w-full space-y-6 sm:space-y-8">
                  {/* Team Description */}
                  <div className="glassmorphic p-4 sm:p-6 md:p-8 rounded-xl transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900">About Our Team</h3>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                      Our team is composed of talented professionals with diverse backgrounds in energy services, technology, and business. We work collaboratively to bring our clients ideas to life and ensure their success in the energy industry.
                    </p>
                  </div>
                  
                  {/* Excellence Points */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-4 sm:mb-6 flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Why We Excel
                    </h3>
                    <div className="grid gap-3 sm:gap-4">
                      {[
                        { text: "Extensive industry experience", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                        { text: "Continuous professional development", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                        { text: "Commitment to excellence", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
                        { text: "Innovation-driven approach", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }
                      ].map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-center p-3 sm:p-4 neumorphic rounded-xl transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-gray-700 font-semibold group-hover:text-gray-900 transition-colors duration-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section - Mobile Responsive */}
        <div id="contact-section" className="neumorphic p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl text-center transform transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-gray-900">
            Get in Touch
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="glassmorphic p-4 sm:p-6 md:p-8 rounded-xl mb-6 sm:mb-8">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                If you have any questions or would like to learn more about our
                energy services, please feel free to contact us. We look forward to 
                working with you and providing the best energy solutions to meet your needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn btn-primary px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg transform hover:scale-105 transition duration-300 font-semibold"
              >
                Contact Us
              </a>
              <a 
                href="/services" 
                className="btn btn-secondary px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg transform hover:scale-105 transition duration-300 font-semibold"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
