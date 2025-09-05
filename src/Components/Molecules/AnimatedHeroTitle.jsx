import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedHeroTitle = () => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl md:text-6xl">
      <span>
        <TypeAnimation
          sequence={['LP Desenvolvimento']}
          wrapper="span"
          speed={40}
          cursor={false}
        />
      </span>
      <br />
      <strong className="text-primary">
        <TypeAnimation
          sequence={[
            2000, // Tunggu 1.5 detik setelah baris pertama selesai
            'Transformamos Pessoas, Processos e Líderes em Resultados Reais',
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
          cursor={false}
        />
      </strong>
    </h1>
  );
};

export default AnimatedHeroTitle;
