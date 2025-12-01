import { FaCheckCircle } from 'react-icons/fa';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img3.jpg';

const WhyJoinSection = () => {
  const diferencialItems = [
    'Projetos personalizados, nada de soluções de prateleira.',
    'Olhar estratégico para cultura e clima organizacional.',
    'Metodologias modernas com ferramentas práticas.',
    'Foco em líderes protagonistas e equipes engajadas.',
    'Consultoria e treinamentos com resultados comprovados.'
  ];

  const resultadoItems = [
    'Líderes mais preparados, confiantes e presentes.',
    'Processos de RH e DP eficientes e mensuráveis.',
    'Cultura fortalecida com valores vividos no dia a dia.',
    'Equipes motivadas e produtivas, com menos retrabalho.',
    'Retenção de talentos e performance empresarial elevadas.'
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-secondary/5 text-gray-900 body-font">
      <div className="absolute inset-y-0 w-1/2 bg-secondary/5 blur-3xl opacity-40 rounded-full -right-32" />
      <div className="absolute inset-y-0 w-1/2 bg-secondary/10 blur-3xl opacity-20 rounded-full -left-32" />

      <div className="relative container px-5 py-24 mx-auto space-y-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-secondary">
            experiência LP desenvolvimento
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Diferenciais que viram resultados mensuráveis
          </h2>
          <p className="mt-4 text-gray-600">
            Conectamos estratégia, pessoas e execução para acelerar a evolução do seu negócio.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary via-purple-300 to-orange-200 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/40">
                <img src={img1} alt="Diferenciais" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur rounded-3xl p-8 shadow-lg border border-white/60">
            <div className="inline-flex items-center px-4 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-secondary/10 text-secondary">
              Diferenciais
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              A consultoria que se adapta à sua cultura
            </h2>
            <div className="space-y-4">
              {diferencialItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="mt-1 text-secondary">
                    <FaCheckCircle />
                  </span>
                  <p className="text-base leading-relaxed text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary via-indigo-300 to-teal-200 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/40">
                <img src={img2} alt="Resultados Esperados" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur rounded-3xl p-8 shadow-lg border border-white/60">
            <div className="inline-flex items-center px-4 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-secondary/10 text-secondary">
              Resultados esperados
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Evolução tangível em pessoas e processos
            </h2>
            <div className="space-y-4">
              {resultadoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="mt-1 text-secondary">
                    <FaCheckCircle />
                  </span>
                  <p className="text-base leading-relaxed text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
