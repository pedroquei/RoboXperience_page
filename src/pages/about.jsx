import Footer from "../components/footer";
import Header from "../components/header";
import Lottie from "lottie-react";
import animationData from "/public/assets/animations/arrow-animated.json";
import ModulesSection from "../components/modulesSection";
import ValuesSection from "../components/valuesSection";

export default function About() {
  return (
    <div>
      <Header />
      <section className="flex flex-col mx-[5vw] justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-[5vw] md:mt-[2vw] mx-5">
          <img
            src="/assets/logo/logorxh.webp"
            alt="logo"
            className="rounded-2xl min-w-[344px] w-[40vw] "
          />
          <h1 className="px-10 py-2 bg-[#FDCB39] mt-[-25px] rounded-xl text-[#0B2D4B] text-lg md-text-2xl font-bold">
            QUEM SOMOS?
          </h1>
        </div>
        <p className=" text-gray-600 text-center mt-10 md:mx-50 md:text-xl">
          Iniciado em 2023 e coordenado pelos professores Dr. Daniel Duarte
          Costa e Dr. Antônio José Dias Vieira, ligado à Fábrica de Inovação do
          IFMA - Campus Imperatriz, o RoboXperience desenvolve kits educacionais
          de robótica para aprendizado prático e acessível.
        </p>
        <Lottie animationData={animationData} className="w-28 mb-10 sm:mb-0" />
      </section>

      <section className="flex flex-col justify-center items-center mx-[5vw] sm:mt-10">
        <h1 className="bg-[#FDCB39] px-5 py-2 text-xl text-[#0B2D4B] font-bold rounded-t-2xl ">
          Objetivo
        </h1>
        <p className="bg-[#0A73B0] text-center rounded-2xl p-5 max-w-[500px] text-white md:text-xl border-[#FDCB39] border-5">
          Nosso principal foco é criar kits de robótica baseados em impressão 3D
          e na plataforma Arduino, projetados para promover o aprendizado
          prático em robótica, tornando a tecnologia acessível a todos os
          estudantes.
        </p>
      </section>

      <ValuesSection />
      <ModulesSection />
      <Footer />
    </div>
  );
}
