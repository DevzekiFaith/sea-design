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

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <section>
          <HeroPage />
        </section>
        <section className="mt-10">
          <Vision />
        </section>
        <section className="mt-10">
          <History />
        </section>
        <section className="mt-10"></section>
          <Company />
        </section>
        <section className="mt-10">
          <Mission />
        </section>
        <section>
          <ClientReview />
        </section>
        <section>
          <Team />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}
