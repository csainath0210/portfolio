import React from "react";
import Header from "./Header";
import { FaArrowDown } from "react-icons/fa";
import "../styles.css";
import useScrollToSection from "../hooks/useScrollToSection";

const HeroPage = () => {
  const { currentSection, scrollToSection } = useScrollToSection();

  return (
    <div className={"section"} id="section1">
      <Header />
      <div className="hero-midsection">
        <div className="hero-left-section">
          <h3>Hello, I'm Sainath.</h3>
        </div>
        <div className="hero-right-section">
          A full-stack developer with a niche in front-end, robust APIs and a
          knack for crafting delightful user experiences.
        </div>
      </div>
      <a onClick={() => scrollToSection(1)}>
        <FaArrowDown
          size={"42px"}
          color={"#ffffff"}
          style={{ marginTop: "10%", paddingLeft: "120px" }}
        />
      </a>
    </div>
  );
};

export default HeroPage;
