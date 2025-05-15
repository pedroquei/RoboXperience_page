function ModulesCard({ id, title, description }) {
  return (
    <article className="bg-[#0A73B0]/20 p-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#0A73B0]/40  transition-all duration-300">
      <h3 className="text-xl font-bold text-[#0A73B0] text-center mb-2">
        {title}
      </h3>
      <p className="text-center">{description}</p>
    </article>
  );
}

export default function ModulesSection() {
  const modulos = [
    {
      id: 1,
      title: "Módulo 1",
      description:
        "O módulo 1 do RoboXperience apresenta aos alunos os conceitos fundamentais de robótica e eletrônica, começando pela introdução ao Arduino e ao uso da Arduino IDE. Por meio de aulas teóricas, exercícios práticos e experimentos com a plataforma, os estudantes aprendem lógica de programação e manuseio de componentes básicos, construindo uma base sólida para as etapas seguintes.",
    },
    {
      id: 2,
      title: "Módulo 2",
      description:
        "No módulo 2, os desafios avançam: os alunos passam a explorar o uso mais complexo de motores e atuadores em conjunto com diferentes sensores, aprofundando-se em automatização. Eles desenvolvem aplicações práticas que envolvem comunicação de dados via infravermelho e Bluetooth, aprendendo técnicas avançadas de programação para integrar hardware e software. ",
    },
    {
      id: 3,
      title: "Módulo 3",
      description:
        "Já no módulo 3, os estudantes devem aplicar tudo o que aprenderam em projetos de maior complexidade, que exigem montagem e programação com precisão.Trabalham com sensores sofisticados e combinam múltiplos componentes eletrônicos, realizando análise detalhada de funcionamento e calibração dos kits.",
    },
  ];

  return (
    <section className="p-4 mx-[5vw] my-[3vw] flex flex-col justify-center items-center ">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-2xl font-bold text-[#0A73B0] mb-4">
          Estrutura do Curso
        </h2>
        <p className="max-w-3xl mb-4 text-gray-600 md:text-xl text-center">
          O RoboXperience é dividido em três módulos progressivos de
          dificuldade, permitindo que os estudantes avancem de forma
          consistente, combinando teoria e prática.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {modulos.map((mod) => (
          <ModulesCard
            key={mod.id}
            id={mod.id}
            title={mod.title}
            description={mod.description}
          />
        ))}
      </div>
    </section>
  );
}
