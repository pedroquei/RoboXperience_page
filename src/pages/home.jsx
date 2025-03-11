import { useState } from "react";
import Header from "../components/header.jsx";
import HeroSection from "../components/heroSection.jsx";
import "../components/comments.jsx";
import Comements from "../components/comments.jsx";
import AboutSection from "../components/aboutSection.jsx";
import Infosection from "../components/infoSection.jsx";
import ImageCarouse from "../components/imageCarouse.jsx";
import CompetitionsSection from "../components/competitionsSection.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Comements />
      <AboutSection />
      <Infosection />
      <ImageCarouse />
      <CompetitionsSection />
    </div>
  );
}
