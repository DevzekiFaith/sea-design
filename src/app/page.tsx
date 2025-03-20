import React from "react";
import Header from "@/component/Header/Header";
import Mission from "@/component/Mission/Mission";
import Vision from "@/component/Vision/Vision";
import History from "@/component/CompanyHistory/History";
import Company from "@/component/CompanyOverview/Company";
import ClientReview from "@/component/ClientReview/Client";
import HeroPage from "@/component/HeroPage/HeroPage";
import Team from "@/component/Team/Team";
import Footer from "@/components/Footer/Footer";
import Partners from "@/component/Partners/Partners";
import Gas from "@/component/Gas/Gas";

export default function Home() {
  return (
    <div className="bg-[#020403] min-h-screen text-white">
      <Header />
      <main className="container mx-auto p-4">
        <section className="mb-10">
          <HeroPage />
        </section>
        <section className="mt-10">
          <Gas/>
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
        <section className="mt-10">
          <ClientReview />
        </section>
        <section className="mt-10">
          <Partners />
        </section>
        <section className="mt-10">
          <Team />
        </section>
      </main>
      <Footer />
    </div>
  );
}
