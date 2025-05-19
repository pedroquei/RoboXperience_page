export default function SponsorsSection() {
  const sponsors = [
    {
      id: 1,
      name: "Fábrica de Inovação",
      image: "/assets/sponsors/sponsor1.webp",
    },
    {
      id: 2,
      name: "Júpiter Internet",
      image: "/assets/sponsors/sponsor2.webp",
    },
    {
      id: 3,
      name: "Instituto Federal Do Maranhão",
      image: "/assets/sponsors/sponsor3.webp",
    },
    {
      id: 4,
      name: "Universidade Federal do Maranhão",
      image: "/assets/sponsors/sponsor4.webp",
    },
  ];

  return (
    <section className="mx-[5vw] my-[2vw] flex flex-row justify-center items-center">
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.id}
          className="flex flex-row justify-center items-center"
        >
          <img
            src={sponsor.image}
            alt={sponsor.name}
            className={`${
              sponsor.id === 2 ? "w-20" : sponsor.id === 4 ? "w-20" : "w-30"
            } h-auto mx-10`}
          />
        </div>
      ))}
    </section>
  );
}
