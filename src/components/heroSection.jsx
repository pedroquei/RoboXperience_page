export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row mx-[5%] my-[3%] font-poppins">
      <div className=" items-center w-full">
        <img
          src="../public/assets/referenceImage/image.png"
          alt="Robô"
          className=" rounded-3xl shadow-3xl"
        />

        <div className=" mt-3 flex justify-center space-x-[4px] md:space-x-[20px] text-[12px] mt-[25px] font-semibold ">
          <p className="bg-[#f0e2a8] text-[#94710a] rounded-xl px-[12px] py-[7px]">
            #inovação
          </p>
          <p className="bg-[#8fa3af] text-[#002545] rounded-xl px-[12px] py-[7px] ">
            #prototipagem
          </p>
          <p className="bg-[#f0e2a8] text-[#94710a] rounded-xl px-[12px] py-[7px] ">
            #robótica
          </p>
          <p className="bg-[#8fa3af] text-[#002545] rounded-xl px-[12px] py-[7px] ">
            #educação
          </p>
        </div>
      </div>

      <div className=" pl-0 pt-6 lg:pl-10">
        <h1 className="text-3xl md:text-3xl font-bold text-[#D9A611]">
          É um <span className="text-[#0B2D4B]">#entusiasta</span> também?
        </h1>
        <p className="text-gray-600 text-[14px] lg:text-[16px] py-5">
          Imagine um mundo onde a tecnologia e a criatividade se encontram numa
          dança mágica de engrenagens e circuitos. O projeto RoboXperience,
          desenvolve kits de robótica incríveis que transformam qualquer aula em
          uma aventura STEAM.
        </p>
        <button className="bg-[#FDCB39]  text-[#0B2D4B] px-4 py-2 rounded-lg font-semibold ">
          Faça parte do nosso time!
        </button>
      </div>
    </section>
  );
}
