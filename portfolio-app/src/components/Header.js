import React from "react";
import "../styles.css";
import useScrollToSection from "../hooks/useScrollToSection";

const Header = () => {
  const { currentSection, setSectionRef, scrollToSection } =
    useScrollToSection();

  return (
    <div className="header-container">
      <div className="header-text-item-bold">SC.</div>
      <div className="header-links-section">
        <a onClick={() => scrollToSection(0)}>
          <div
            className="header-text-item"
            style={{
              textDecoration: currentSection === 0 ? "underline" : "none",
              transition: "width 0.3s ease",
            }}
            ref={setSectionRef(0)}
          >
            The work
          </div>
        </a>
        <a onClick={() => scrollToSection(1)}>
          <div
            className="header-text-item"
            ref={setSectionRef(1)}
            style={{
              textDecoration: currentSection === 1 ? "underline" : "none",
              transition: "width 0.3s ease",
            }}
          >
            The blog
          </div>
        </a>
        <a onClick={() => scrollToSection(2)}>
          <div
            className="header-text-item"
            ref={setSectionRef(2)}
            style={{
              textDecoration: currentSection === 2 ? "underline" : "none",
              transition: "width 0.3s ease",
            }}
          >
            The person
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
