import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { EqualIcon, Plus } from "lucide-react";

function ValueCard({ title, description }) {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      onClick={() => setActive((v) => !v)}
      layout
      transition={{ type: "spring", damping: 50 }}
      className={`
        bg-[#FDCB39]/50 
        rounded-xl 
        px-4 py-4 
        w-150 
        font-bold 
        shadow-lg
        hover:bg-[#FDCB39]/80 duration-300
        text-center
        max-w-xs
      `}
    >
      {/* título */}
      <motion.span layout className="text-2xl text-[#0B2D4B]">
        + {title}
      </motion.span>

      {/* descrição animada */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.span
            key="desc"
            className="flex text-md mt-2 text-gray-600"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function ValuesSection() {
  const values = [
    {
      id: 1,
      title: "Acessibilidade",
      description:
        "Acreditamos que a tecnologia deve ser acessível a todos. Nossos kits promovem a inclusão e o aprendizado prático. Sendo uma ferramenta poderosa para o ensino de robótica.",
    },
    {
      id: 2,
      title: "Inovação",
      description:
        "Estamos sempre em busca de novas ideias e abordagens. Garantindo que os alunos tenham acesso às melhores ferramentas para aprender de forma prática e divertida.",
    },
    {
      id: 3,
      title: "Educação Prática",
      description:
        "Valorizamos o aprendizado prático como uma forma eficaz de ensino. Nossos kits permitem que os alunos experimentem, construam e programem robôs.",
    },
  ];

  return (
    <LayoutGroup>
      <section className="mx-[5vw] my-20 sm:my-[3vw] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <h1 className="text-[#0A73B0] bg-[#0A73B0]/30 text-2xl font-bold py-2 w-50 rounded-xl text-center">
            IMPRESSÃO 3D
          </h1>
          <Plus
            className="bg-[#0B2D4B] rounded-xl p-2"
            size={38}
            color="white"
          />
          <h1 className="text-[#0A73B0] bg-[#0A73B0]/30 text-2xl font-bold py-2 w-50 rounded-xl text-center">
            ARDUINO
          </h1>
        </div>

        <EqualIcon
          className="bg-[#0A73B0] rounded-full p-2"
          size={48}
          color="white"
        />

        <div className="flex flex-col sm:flex-row gap-3">
          {values.map((value) => (
            <ValueCard
              key={value.id}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>
    </LayoutGroup>
  );
}
