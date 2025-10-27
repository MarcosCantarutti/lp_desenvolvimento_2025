import { useState } from 'react';
import heroIllustration from '../../assets/images/a.png';
import introVideo from '../../assets/images/intro.mp4';
import Button from '../Atoms/Button';
import ParticlesBackground from '../Atoms/ParticlesBackground';
import AnimatedHeroTitle from '../Molecules/AnimatedHeroTitle';

const HeroSection = () => {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <section className="relative bg-white overflow-hidden animate-fade-in-up min-h-screen flex items-center">
      {/* Video Background */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        src={introVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        poster={heroIllustration}
        onLoadedData={() => setVideoReady(true)}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <ParticlesBackground />
      
      {/* Content */}
      <div className="container mx-auto relative z-10 px-4 py-12 sm:px-6">
        <div className="max-w-3xl">
          <div className="text-center lg:text-left">
            <AnimatedHeroTitle />

            <p className="mt-6 text-lg leading-relaxed text-white font-bold drop-shadow-lg">
              Consultoria estratégica em RH, DP e Desenvolvimento de Lideranças.
              Projetos personalizados, alinhados à cultura da sua empresa.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                variant="primary"
                as="Link"
                to="/program"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero falar com um especialista
              </Button>

              {/* <Button
                variant="secondary"
                as="Link"
                to="/course"
                rel="noopener noreferrer"
              >
                Lihat Course
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
