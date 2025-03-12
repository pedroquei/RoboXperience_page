export default function SponsorsSection() {
  const sponsors = [
    {
      id: 1,
      name: "Fábrica de Inovação",
      image: "/public/assets/sponsors/sponsor1.png",
    },
    {
      id: 2,
      name: "Júpiter Internet",
      image: "/public/assets/sponsors/sponsor2.png",
    },
    {
      id: 3,
      name: "Instituto Federal Do Maranhão",
      image: "/public/assets/sponsors/sponsor3.png",
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
            className={`${sponsor.id === 2 ? "w-20" : "w-30"} h-auto mx-10`}
          />
        </div>
      ))}
    </section>
  );
}
