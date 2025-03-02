import React from "react";
import Image from "next/image";
import Header from "@/component/Header/Header";
import Footer from "@/components/Footer/Footer";

const CEOStatement: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 md:p-8 pt-[6rem]">
        <h1 className="text-4xl font-bold text-center xl:pt-[6rem] pt-[3rem] mb-8 text-blue-600">
          CEO Statement
        </h1>
        <div className="flex flex-col md:flex-row items-center p-8 rounded-2xl shadow-lg transform transition-transform duration-500 hover:translate-y-2 hover:shadow-2xl">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
            <Image
              src="/images/ceo1.jpg"
              alt="CEO"
              width={800}
              height={800}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-2/3 text-white">
            <p className="text-lg mb-6">
              Dear Clients and Prospective Clients,
            </p>
            <div className="mb-6 p-8 rounded-lg xl:w-[800px]">
              <p className="text-lg mb-6">
                Welcome to Lucktang! As the CEO of this esteemed organization, I
                am honored to address you and share our vision, mission, and
                commitment to excellence in the marine industry. At Lucktang, we
                pride ourselves on delivering top-tier maritime services and
                products that meet the highest industry standards. Our journey
                began with a clear vision: to provide innovative solutions that
                empower businesses to achieve their goals and exceed their
                expectations.
              </p>
              <p className="text-lg mb-6">
                Over the years, we have expanded our offerings to include a wide
                range of services, from ship chandling and marine logistics to
                engine spare parts and technical stores. Our growth has been
                fueled by our dedication to understanding the unique needs of
                each client and delivering customized solutions that ensure
                their success. We believe that our clients are our most valuable
                partners, and we are committed to building long-lasting
                relationships based on trust, integrity, and mutual respect.
              </p>
              <p className="text-lg mb-6">
                Our team of experts is passionate about what they do and brings
                a wealth of knowledge and experience to every project. We work
                collaboratively to ensure that our clients receive the highest
                quality services and products, tailored to their specific
                requirements. Our innovative approach and commitment to
                excellence have earned us a reputation as a trusted partner in
                the marine industry.
              </p>
              <p className="text-lg mb-6">
                As we look to the future, we remain focused on our mission to
                continuously evolve and exceed client expectations. We are
                dedicated to staying ahead of industry trends and embracing new
                technologies to provide cutting-edge solutions. Our goal is to
                be the preferred choice for maritime services and products,
                known for our reliability, efficiency, and exceptional customer
                service.
              </p>
            </div>
            <p className="text-lg mb-6">
              To our existing clients, thank you for your continued trust and
              support. We are grateful for the opportunity to serve you and look
              forward to continuing our successful partnership. To our
              prospective clients, we invite you to experience the Lucktang
              difference. We are confident that our expertise, dedication, and
              commitment to excellence will exceed your expectations and help
              you achieve your goals.
            </p>
            <p className="text-lg mb-6">
              Thank you for considering Lucktang as your trusted partner in the
              marine industry. We look forward to working with you and
              contributing to your success.
            </p>
            <p className="text-lg mb-6">
              Sincerely,
              <br />
              [CEO Name]
              <br />
              CEO, Lucktang
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CEOStatement;
