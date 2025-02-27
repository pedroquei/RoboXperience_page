export default function AboutSection() {
  return (
    <section className=" bg-[#fcbe03] rounded-2xl m-[5%] p-5 md:p-0 flex flex-col  md:flex-row md:items-center">
      <div className=" bg-[#808080] rounded-2xl flex justify-center md:w-[60%]">
        <img
          src="/public/assets/referenceImage/image2.png"
          alt="RoboXperience"
          className="rounded-full md:w-100 p-5 "
        />
      </div>

      <div className="flex flex-col p-[5%] w-full justify-center items-center  md:items-baseline md:px-[48px] md:py-0">
        <h1 className="font-bold text-2xl lg:text-3xl text-[#0B2D4B]">
          AINDA NÃO CONHECE?
        </h1>
        <p className="mt-[3%] text-[#4E6071] text-14">
          O RoboXperience é um projeto vinculado à Fábrica de Inovação do IFMA -
          Campus Imperatriz. Acreditamos que aprender robótica pode ser fácil e
          empolgante! Criamos kits educacionais para quem quer entrar nesse
          mundo sem complicação. Ah, e tudo com tecnologia de ponta – Arduino,
          impressão 3D e muita inovação!
        </p>
      </div>
    </section>
  );
}
