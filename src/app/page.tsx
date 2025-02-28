import React from "react";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import Mission from "@/component/Mission/Mission";
import Vision from "@/component/Vision/Vision";
import History from "@/component/CompanyHistory/History";
import Company from "@/component/CompanyOverview/Company";
import ClientReview from "@/component/ClientReview/Client";
import HeroPage from "@/component/HeroPage/HeroPage";
import Team from "@/component/Team/Team";
// import Partners from "@/component/Partners/Partners";

export default function Home() {
  return (
    <div>
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
        <section className="mt-10">
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
      </main>
      <Footer />
    </div>
  );
}
