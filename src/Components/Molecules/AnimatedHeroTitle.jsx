import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedHeroTitle = () => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-4xl md:text-5xl">
      {/* <span>
        <TypeAnimation
          sequence={['LP Desenvolvimento']}
          wrapper="span"
          speed={40}
          cursor={false}
        />
      </span> */}
      <br />
      <strong className="text-white">
        <TypeAnimation
          sequence={[
            1000, // Tunggu 1.5 detik setelah baris pertama selesai
            'Transformamos Pessoas, processos e líderes em resultados reais',
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
