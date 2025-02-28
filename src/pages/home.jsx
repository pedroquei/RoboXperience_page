import { useState } from "react";
import Header from "../components/header.jsx";
import HeroSection from "../components/heroSection.jsx";
import "../components/comments.jsx";
import Comements from "../components/comments.jsx";
import AboutSection from "../components/aboutSection.jsx";
import Infosection from "../components/infoSection.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Comements />
      <AboutSection />
      <Infosection />
    </div>
  );
}
