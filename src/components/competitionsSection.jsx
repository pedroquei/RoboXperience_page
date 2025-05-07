import Lottie from "lottie-react";
import animationData from "/public/assets/animations/trophyAnimated.json";

const placements = [
  {
    id: 1,
    placing: "2º Lugar",
    competitionName: "LABIRINTO INTELIGENTE",
    local: "UNIVERSO IFMA 2023",
  },
  {
    id: 2,
    placing: "1º Lugar",
    competitionName: "CAÇA BALÃO",
    local: "III COPA DE ROBÓTICA IFMA IMPERATRIZ",
  },
  {
    id: 3,
    placing: "3º Lugar",
    competitionName: "CAÇA BALÃO",
    local: "LIGA NACIONAL DE ROBÓTICA",
  },
];

export default function CompetitionsSection() {
  return (
    <section className="flex flex-col justify-center items-center md:flex-row">
      <div>
        <Lottie
          animationData={animationData}
          className="w-[25vw] md:w-[20vw] mx-5 h-auto mt-5"
        />
      </div>

      <div>
        <>
          <div className="flex flex-row justify-center items-center font-bold text-sm md:text-lg">
            {placements.map((placement) => (
              <div
                key={placement.id}
                className={`bg-[#0a73b0] text-white h-70 w-30 sm:w-40 flex flex-col p-4 mx-[1vw] items-center text-center rounded-xl ${
                  placement.id === 1
                    ? "mt-15"
                    : placement.id === 3
                    ? "mt-20"
                    : ""
                } `}
              >
                <p
                  className={`w-full py-2 rounded-lg shadow-xl ${
                    placement.id === 1
                      ? "bg-[#B5B5B5]"
                      : placement.id === 2
                      ? "bg-[#FCBE03]"
                      : placement.id === 3
                      ? "bg-[#CE8946]"
                      : ""
                  }`}
                  style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.2)" }}
                >
                  {placement.placing}
                </p>
                <p className="my-auto text-[#FCBE03] font-black mt-auto ">
                  {placement.competitionName}
                </p>
                <p>{placement.local}</p>
              </div>
            ))}
          </div>
        </>
      </div>
    </section>
  );
}
