import React from "react";
import TopSection from "./TopSection";
import MainSection from "./MainSection";
import FooterSection from "./FooterSection";
import MobileMainSection from "./MobileMainSection";


const Home = () => {
  return (
    <div className="overflow-hidden">
      <TopSection />
      <MainSection />
      <MobileMainSection />
      <FooterSection />
    </div>
  );
};

export default Home;
