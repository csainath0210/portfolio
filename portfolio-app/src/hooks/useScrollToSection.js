import { useState, useEffect, useRef } from 'react';

const useScrollToSection = () => {
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  // Store references to each section when they are rendered
  const setSectionRef = (index) => (element) => {
    sectionsRef.current[index] = element;
  };

  // Function to scroll to a section by its index
  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setCurrentSection(index); // Update current section
    }
  };

  // Handle scroll behavior (auto scroll to next/previous on wheel)
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      if (currentSection < sectionsRef.current.length - 1) {
        scrollToSection(currentSection + 1);
      }
    } else if (e.deltaY < 0) {
      if (currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    }
  };

  useEffect(() => {
    // Attach the wheel event to the window
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

  return { currentSection, setSectionRef, scrollToSection };
};

export default useScrollToSection;
