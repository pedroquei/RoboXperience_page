import Lottie from "lottie-react";
import animationData from "/public/assets/trophy/trophyAnimated.json";

const placements = [
  {
    id: 1,
    placing: "1º Lugar",
    competitionName: "CAÇA BALÃO",
    local: "III COPA DE ROBÓTICA IFMA IMPERATRIZ",
  },
  {
    id: 2,
    placing: "2º Lugar",
    competitionName: "LABIRINTO INTELIGENTE",
    local: "UNIVERSO IFMA 2023",
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
    <section>
      <div>
        <Lottie animationData={animationData} className="w-100" />
      </div>
    </section>
  );
}
