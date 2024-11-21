import React from "react";
import TopSection from "./TopSection";
import MainSection from "./MainSection";
import FooterSection from "./FooterSection";
import MobileMainSection from "./MobileMainSection";
import BlogSection from "./BlogSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <TopSection />
      <MainSection />
      <MobileMainSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default Home;
