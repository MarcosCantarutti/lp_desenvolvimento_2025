import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../../assets/images/img2.jpg";
import { Feature } from "../../types";

const HIMTIChatSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Ferramentas de Desenvolvimento e Acompanhamento",
      description: "PDI e trilhas de aprendizagem e treinamentos.",
    },
    {
      title: "Avaliações e Feedbacks",
      description: "Gestão de desempenho com dados reais.",
    },
    {
      title: "Pesquisas de Clima",
      description: "Entenda o que sua equipe sente antes de perdê-la.",
    },
    {
      title: "Indicadores",
      description: "Tenha o controle e a praticidade das informações.",
    },
    {
      title: "Implementação Assistida",
      description:
        "Não entregamos apenas o acesso; nós configuramos e treinamos seu time para garantir resultados.",
    },
  ];

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* SHAPE DIVIDER ATAS */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="relative block w-full h-[150px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
               82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
               906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
               214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>

      {/* --- Background Layered Effect --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231D4ED8' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v2H0zM0 40h80v2H0z' transform='rotate(45 40 40)'/%3E%3C/g%3E%3Cg fill='%231D4ED8' fill-opacity='0.2'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Konten Utama */}
      <section className="relative z-0 text-white" id="services">
        <div className="pt-32 pb-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center">
              <img
                src={img}
                alt="HIMTI Chat illustration"
                className="w-full h-full max-w-[40rem] rounded-2xl object-cover shadow-lg ring-1 ring-black/10"
                loading="lazy"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                Conheça nossos serviços
              </h2>
              <h3 className="text-sm text-blue-200">Tecnologia, consultoria e mentoria: A profissionalização de que sua
              empresa precisa</h3>
              <div className="mt-8 text-left space-y-4">
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-300/20 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{feature.title}</h3>
                      <p className="text-sm text-blue-200">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHAPE DIVIDER BAWAH */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="relative block w-full h-[150px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
               82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
               906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
               214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  );
};

export default HIMTIChatSection;
