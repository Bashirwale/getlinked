import React from "react";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import RulesSection from "../components/home/RulesSection";
import CriteriaSection from "../components/home/CriteriaSection";
import FaqsSection from "../components/home/FaqsSection";
import TimelineSection from "../components/home/TimelineSection";
import PrizesSection from "../components/home/PrizesSection";
import SponsorsSection from "../components/home/SponsorsSection";
import PrivacySection from "../components/home/PrivacySection";
import FooterSection from "../components/home/FooterSection";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <IntroSection />
      <RulesSection />
      <CriteriaSection />
      <FaqsSection />
      <TimelineSection />
      <PrizesSection />
      <SponsorsSection />
      <PrivacySection />
      <FooterSection />
    </div>
  );
};

export default Home;
