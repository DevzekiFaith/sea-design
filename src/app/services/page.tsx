import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/component/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeroPage from "@/component/Video-HeroPage/Video-HeroPage";

const services = [
  {
    id: 1,
    title: "Marine and Shipping Management",
    description:
      "We provide comprehensive marine and shipping management services to ensure smooth and efficient operations.",
    route: "/services/marine-shipping-management",
    image: "/images/ms8.jpg",
  },
  {
    id: 2,
    title: "Ship Chandler",
    description:
      "Our ship chandler services offer a wide range of supplies and provisions to meet the needs of your vessel.",
    route: "/services/ship-chandler",
    image: "/images/ms2.jpg",
  },
  {
    id: 3,
    title: "Freight, Logistics and Shipping Management",
    description:
      "We offer expert ship/port operation agent services along with freight, logistics, and shipping management solutions.",
    route: "/services/freight-agent",
    image: "/images/ms3.jpg",
  },
  {
    id: 4,
    title: "Ship / Port Operation Agents",
    description:
      "Our Ship / Port Operation Agents services offer a wide range of supplies and provisions to meet the needs of your vessel.",
    route: "/services/ship-port-operation-agent",
    image: "/images/ms6.jpg",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroPage />
      <div className="container mx-auto p-4 pt-[8rem]">
        <div
          className="text-center text-blue-500 mt-[2rem] 
        mb-[2rem] text-extrabold text-4xl uppercase"
        >
          Features
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#020403]  rounded-lg p-6 shadow-lg 
              hover:shadow-xl transition-shadow 
              duration-300 flex flex-col items-center"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-4 text-center">
                {service.title}
              </h2>
              <p className="mb-4 text-center">{service.description}</p>
              <Link
                href={service.route}
                className="text-blue-500 hover:underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
