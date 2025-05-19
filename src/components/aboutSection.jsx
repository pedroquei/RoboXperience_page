export default function AboutSection() {
  return (
    <section className="bg-[#fcbe03] rounded-2xl m-[5%] p-5 flex flex-col lg:flex-row items-center">
      {/* Imagem */}
      <div className="bg-gray-600 rounded-2xl flex justify-center w-full lg:w-[40%] p-3">
        <img
          src="/assets/referenceImage/image2.webp"
          alt="RoboXperience"
          loading="lazy"
          className="rounded-xl md:h-[60%] max-w-full"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col justify-center items-center lg:items-start lg:px-12">
        <h1 className="font-bold text-xl sm:text-2xl p-5 lg:pt-0 lg:text-3xl text-[#0B2D4B] text-center lg:text-left">
          AINDA NÃO CONHECE?
        </h1>
        <p className=" text-[#4E6071] text-base pb-3 lg:text-lg max-w-lg text-center lg:text-left">
          O <strong>RoboXperience</strong> é um projeto vinculado à Fábrica de
          Inovação do IFMA - Campus Imperatriz. Acreditamos que aprender
          robótica pode ser fácil e empolgante! Criamos kits educacionais para
          quem quer entrar nesse mundo sem complicação. Ah, e tudo com
          tecnologia de ponta – <strong>Arduino, impressão 3D</strong> e muita
          inovação!
        </p>
      </div>
    </section>
  );
}
