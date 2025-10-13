import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img3.jpg';

const WhyJoinSection = () => {
  return (
    <section className="text-gray-900 body-font bg-white">
      <div className="container px-5 py-24 mx-auto space-y-20">
        {/* Row 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] w-full h-full overflow-hidden rounded-2xl drop-shadow-xl [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]">
              <img src={img1} alt="Diferenciais" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-secondary text-2xl md:text-3xl font-bold mb-4">Diferenciais</h2>
            <p className="leading-relaxed text-base whitespace-pre-line">
              {` - Projetos personalizados, nunca soluções de prateleira\n\n  - Olhar estratégico para a cultura organizacional\n\n  - Metodologias modernas e ferramentas práticas\n\n - Foco no desenvolvimento de líderes e no engajamento de colaboradores.\n\n  - Experiência comprovada em consultoria e treinamentos`}
            </p>
          </div>
        </div>

        {/* Row 2: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] w-full h-full overflow-hidden rounded-2xl drop-shadow-xl [clip-path:polygon(15%_0,100%_0,100%_100%,15%_100%,0_50%)]">
              <img src={img2} alt="Resultados Esperados" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-secondary text-2xl md:text-3xl font-bold mb-4">Resultados Esperados</h2>
            <p className="leading-relaxed text-base whitespace-pre-line">
              {` - Líderes mais preparados e engajados\n\n - Processos de RH e DP mais eficientes\n\n - Cultura organizacional fortalecida\n\n - Equipes mais motivadas e produtivas\n\n - Maior retenção de talentos e performance empresarial`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
