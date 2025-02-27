import React from "react";
import Image from "next/image";
// import Image1 from "public/images/s1.jpg"
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import Mission from "@/component/Mission/Mission";
import Vision from "@/component/Vision/Vision";
import History from "@/component/CompanyHistory/History";
import Company from "@/component/CompanyOverview/Company";
import ClientReview from "@/component/ClientReview/Client";
// import Partners from "@/component/Partners/Partners";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <section className="relative h-screen">
          <Image
            src="/images/s4.jpg"
            alt="Hero Background"
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
            className="z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="text-center text-white p-8">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to Lucktang Int'l Limited
              </h1>
              <p className="text-lg mb-4">
                At Lucktang, we are committed to revolutionizing the Marine
                space with cutting-edge solutions for modern Water Works.
              </p>
              <h3 className="text-2xl font-semibold mb-2">CEO's Statement</h3>
              <p className="italic">
                "At Lucktang, innovation drives everything we do, focusing on
                delivering the future today."
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <Vision />
        </section>
        <section className="mt-10">
          <History />
        </section>
        <section className="mt-10">
          <Company />
        </section>

        <section className="mt-10">
          <Mission />
        </section>

        <section>
          <ClientReview />
        </section>
      </main>
      <Footer />
    </div>
  );
}
