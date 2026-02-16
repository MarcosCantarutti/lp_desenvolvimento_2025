import React from "react";
import HeroSection from "../Components/Organisms/HeroSection";
import StatsSection from "../Components/Organisms/StatsSection";
import TestimonialSection from "../Components/Organisms/TestimonialSection";
import WhyJoinSection from "../Components/Organisms/WhyJoinSection";
import AnimatedSection from "../Components/Atoms/AnimatedSection";
import HIMTIChatSection from "../Components/Organisms/HIMTIChatSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />

      <AnimatedSection>
        <HIMTIChatSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyJoinSection />
      </AnimatedSection>

      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialSection />
      </AnimatedSection>
    </>
  );
};

export default Home;
