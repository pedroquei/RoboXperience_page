import "../index.css"; // Importando o CSS personalizado

const ImageCarousel = () => {
  const images = [
    "/assets/carouseImages/equipe1.webp",
    "/assets/carouseImages/equipe2.webp",
    "/assets/carouseImages/equipe3.webp",
    "/assets/carouseImages/equipe4.webp",
  ];

  return (
    <div className="bg-[#0A73B0] py-5 mx-[5vw] rounded-2xl">
      <h1 className="text-[#FDCB39] text-center text-2xl font-bold">
        E TEM MAIS...
      </h1>
      <h2 className="text-white text-center text-md md:text-xl font-semibold py-5 ">
        Nossa equipe de robótica já brilhou em diversas competições! Confira:
      </h2>
      <div className=" mx-5 rounded-xl items-center overflow-hidden ">
        <div className="flex w-max animate-scroll">
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              loading="lazy"
              className="h-50 md:h-70 w-auto object-cover "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
