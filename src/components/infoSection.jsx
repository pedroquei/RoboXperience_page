import { CodeXml, Cpu, Gauge, Wrench } from "lucide-react";

export default function Infosection() {
  const content = [
    {
      id: 1,
      name: "Programação",
      icon: <CodeXml />,
    },
    {
      id: 2,
      name: "Motores",
      icon: <Gauge />,
    },
    {
      id: 3,
      name: "Sensores",
      icon: <Cpu />,
    },
    {
      id: 2,
      name: "Manutenção",
      icon: <Wrench />,
    },
  ];

  return (
    <section className="mx-[5vw] my-[5vh]">
      <div className="flex flex-col justify-center items-center text-[#0a73b0] font-bold">
        <h1 className="text-lg md:text-3xl">OLHA SÓ O QUE VOCÊ VAI APRENDER</h1>
        <div className="flex flex-wrap justify-center text-white my-10">
          {content.map((information) => (
            <div
              key={information.id}
              className="bg-[#0a73b0] mx-5 my-5 flex flex-col justify-center items-center rounded-2xl w-30 h-30 font-semibold"
            >
              {information.icon}
              <p>{information.name}</p>
            </div>
          ))}
        </div>
        <h1 className="text-2xl md:text-xl">FÁCIL DE MONTAR</h1>
        <h1 className="text-xl md:text-2xl text-[#fcbe03]">
          DIVERTIDO DE APRENDER!
        </h1>
      </div>
    </section>
  );
}
