import heroIllustration from '../../assets/images/a.png';
import Button from '../Atoms/Button';
import ParticlesBackground from '../Atoms/ParticlesBackground';
import AnimatedHeroTitle from '../Molecules/AnimatedHeroTitle';

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden animate-fade-in-up">
      <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-[#1D4ED8] via-[#f9f6f4] to-white"></div>
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
                Quero Falar com um Consultor
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
              {/* <img
                alt="Mahasiswa"
                src={heroIllustration}
                className="max-w-lg h-auto w-full rounded-2xl object-contain"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
