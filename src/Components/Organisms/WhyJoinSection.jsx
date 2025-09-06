import { FaUserTie, FaMobileAlt, FaBookOpen } from 'react-icons/fa';

const Feature = ({ icon, title, description }) => (
  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-primary mb-5 flex-shrink-0">
      {icon}
    </div>
    <div className="flex-grow">
      <h2 className="text-secondary text-lg title-font font-bold mb-3">
        {title}
      </h2>
      <p className="leading-relaxed text-base whitespace-pre-line text-left">
        {description}
      </p>
    </div>
  </div>
);

const WhyJoinSection = () => {
  const features = [
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: 'Serviços personalizados',
      description:
        ' - Formação de Líderes \n\n  - Comunicação Assertiva e Feedback \n\n  - Cultura Forte & Liderança Multiplicadora \n\n  - Gestão do tempo \n\n  - Gestão de Conflitos',
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: 'Diferenciais',
      description:
        ' - Projetos personalizados, nunca soluções de prateleira \n\n  - Olhar estratégico para a cultura organizacional \n\n  - Metodologias modernas e ferramentas práticas \n \n - Foco no desenvolvimento de líderes e no engajamento de colaboradores. \n\n  - Experiência comprovada em consultoria e treinamentos',
    },
    {
      icon: <FaBookOpen className="w-8 h-8" />,
      title: 'Resultados Esperados',
      description:
        ' - Líderes mais preparados e engajados \n\n - Processos de RH e DP mais eficientes\n\n - Cultura organizacional fortalecida\n\n - Equipes mais motivadas e produtivas\n\n - Maior retenção de talentos e performance empresarial',
    },
  ];

  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20 px-4">
          <h1 className="text-2xl sm:text-3xl font-bold title-font text-secondary mb-8">
            Nossos Serviços
          </h1>

          <div class="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10">
            <p className="text-sm sm:text-base leading-relaxed sm:w-2/4 lg:w-3/4 mx-auto text-gray-500 flex flex-col gap-">
              <span class="text-gray-700 font-bold text-center text-base sm:text-lg">
                Consultoria e Auditoria Estratégica em RH e DP
              </span>
              Transformamos rotinas administrativas em processos eficientes,
              conectados à estratégia da empresa.
            </p>
            <p className="text-sm sm:text-base leading-relaxed sm:w-2/4 lg:w-3/4 mx-auto text-gray-500 flex flex-col gap-">
              <span class="text-gray-700 font-bold text-center text-base sm:text-lg">
                Gestão de Cargos, Salários e Carreiras
              </span>
              Estruturas que valorizam talentos, promovem crescimento
              sustentável e fortalecem o engajamento.<br></br>
            </p>
            <p className="text-sm sm:text-base leading-relaxed sm:w-2/4 lg:w-3/4 mx-auto text-gray-500 flex flex-col gap-">
              <span class="text-gray-700 font-bold text-center text-base sm:text-lg">
                Treinamentos, Palestras e Workshops Corporativos
              </span>
              Cultura Organizacional e Arquitetura Empresarial<br></br>
              Projetos que fortalecem a identidade da empresa, aumentam a
              clareza e impulsionam a performance.<br></br>
            </p>
            <p className="text-sm sm:text-base leading-relaxed sm:w-2/4 lg:w-3/4 mx-auto text-gray-500 flex flex-col gap-">
              <span class="text-gray-700 font-bold text-center text-base sm:text-lg">
                Treinamentos, Palestras e Workshops Corporativos
              </span>
              Formação prática e estratégica para líderes preparados para
              inspirar e multiplicar resultados.
            </p>
          </div>

          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700 mt-20 font-bold">
            Abaixo alguns dos principais temas, mas podemos construir de acordo
            com sua necessidade.
          </p>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
