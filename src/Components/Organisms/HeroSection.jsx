import { useState } from 'react';
import heroIllustration from '../../assets/images/a.png';
import introVideo from '../../assets/images/intro.mp4';
import Button from '../Atoms/Button';
import ParticlesBackground from '../Atoms/ParticlesBackground';
import AnimatedHeroTitle from '../Molecules/AnimatedHeroTitle';

const HeroSection = () => {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <section className="relative bg-white overflow-hidden animate-fade-in-up">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-[#132b37] via-[#b1b1b1] to-white"></div>
      <ParticlesBackground />
      <div className="container mx-auto flex min-h-screen items-center px-4 pt-1 pb-12 sm:px-6">
        <div className="grid w-full grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="text-center lg:text-left">
            <AnimatedHeroTitle />

            <p className="mt-6 text-lg leading-relaxed text-gray-800 font-bold">
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

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-xl lg:max-w-none">
              <video
                className={`w-full h-auto rounded-2xl shadow-2xl ring-1 ring-black/10 transition-opacity duration-700 ease-out ${videoReady ? 'opacity-100' : 'opacity-0'}`}
                src={introVideo}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                poster={heroIllustration}
                onLoadedData={() => setVideoReady(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
