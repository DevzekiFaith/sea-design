"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });
const BackButton = dynamic(() => import("@/components/BackButton/BackButton"), { ssr: false });

const services = [
  {
    id: 1,
    title: "Dredging Services",
    description:
      "We offer comprehensive dredging services to meet the diverse needs of our clients, ensuring efficient and effective operations.",
    route: "/services/dredging",
    image: "/images/dreg2.jpg",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <BackButton />

      {/* Hero Section with Glassmorphism */}
      <div className="relative h-[60vh] md:h-[80vh] w-full mt-20">
        <Image
          src="/images/dreg1.jpg"
          alt="Dredging Services"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="glassmorphic p-12 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 display-font">Our Services</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Professional dredging solutions for marine and inland water environments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8 -mt-20 relative z-10">
        {/* Services Section */}
        <div className="card p-12 mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Our Professional Services
          </h2>
          
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="neumorphic p-8 transform transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="relative h-80 w-full mb-8 transform transition-transform duration-500 hover:scale-105">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-6 text-slate-800 card-title">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg leading-relaxed text-slate-700 mb-8">
                      {service.description}
                    </p>
                    
                    <div className="glassmorphic p-6 mb-8">
                      <h4 className="text-xl font-semibold mb-4 text-slate-800">
                        Why Choose Our Dredging Services?
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span>State-of-the-art equipment</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span>Experienced professionals</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span>Environmental compliance</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span>24/7 support</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link href={service.route}>
                      <button className="btn btn-primary px-8 py-4 text-lg transform hover:scale-105 transition duration-300">
                        Learn More About Dredging
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 card-title">
              Our Expertise
            </h3>
            <div className="space-y-4">
              <div className="glassmorphic p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Marine Dredging</h4>
                <p className="text-slate-700 text-sm">Port and harbor maintenance, channel deepening, and coastal protection.</p>
              </div>
              <div className="glassmorphic p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Environmental Dredging</h4>
                <p className="text-slate-700 text-sm">Contaminated sediment removal and environmental restoration projects.</p>
              </div>
              <div className="glassmorphic p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Land Reclamation</h4>
                <p className="text-slate-700 text-sm">Creating new land areas for development and infrastructure projects.</p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 card-title">
              Why Choose Us
            </h3>
            <div className="neumorphic p-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                With years of experience in the dredging industry, we have built a reputation for delivering high-quality services that meet the most demanding project requirements.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our commitment to safety, environmental responsibility, and operational excellence ensures that every project is completed to the highest standards while minimizing environmental impact.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA Card */}
        <div className="card p-8 text-center">
          <h3 className="text-3xl font-bold mb-6 text-slate-800 card-title">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your dredging needs and get a customized solution that meets your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="btn btn-primary px-8 py-4 text-lg transform hover:scale-105 transition duration-300">
                Get a Quote
              </button>
            </Link>
            <Link href="/about">
              <button className="btn btn-secondary px-8 py-4 text-lg transform hover:scale-105 transition duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
