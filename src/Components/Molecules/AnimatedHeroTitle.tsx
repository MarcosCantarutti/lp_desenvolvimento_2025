import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedHeroTitle: React.FC = () => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
      <br />
      <strong className="text-white">
        <TypeAnimation
          sequence={[
            1000,
            "Do RH operacional à Gestão Estratégica: Tecnologia e Liderança para escalar sua empresa.",
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={false}
        />
      </strong>
    </h1>
  );
};

export default AnimatedHeroTitle;
