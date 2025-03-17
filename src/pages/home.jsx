import { useState } from "react";
import Header from "../components/header.jsx";
import HeroSection from "../components/heroSection.jsx";
import "../components/comments.jsx";
import Comements from "../components/comments.jsx";
import AboutSection from "../components/aboutSection.jsx";
import Infosection from "../components/infoSection.jsx";
import ImageCarouse from "../components/imageCarouse.jsx";
import CompetitionsSection from "../components/competitionsSection.jsx";
import SponsorsSection from "../components/sponsorsSection.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <div className="font-poppins">
      <Header />
      <HeroSection />
      <Comements />
      <AboutSection />
      <Infosection />
      <ImageCarouse />
      <CompetitionsSection />
      <SponsorsSection />
      <h1 className="text-center text-2xl text-[#0A73B0] font-semibold p-5">
        Não vai querer ficar de fora dessa,né?!
      </h1>
      <Footer />
    </div>
  );
}
