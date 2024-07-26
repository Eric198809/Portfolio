import { useState, useEffect } from "react";
import logoLinkedin from "../assets/linkedin.svg";
import logoGithub from "../assets/github.svg";

const Header = () => {
  const wordsDescription = [
    "React",
    "JS",
    "Node JS",
    "Front",
    "Back",
    "Fullstack",
  ];
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * wordsDescription.length);
      setCurrentWord(wordsDescription[randomIndex]);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [wordsDescription]);

  return (
    <>
      <div className="header-container">
        <h1 className="header_title">
          Eric Besson <br />
          Développeur web {currentWord}
          <br />
        </h1>
        <p>
          Je suis Eric, Développeur Web & Mobile, passionné par l'univers du
          code et des nouvelles technologies.<br></br> Bienvenue sur mon
          portfolio.
        </p>
      </div>
      <div className="header-buttons">
        <a
          href="https://www.linkedin.com/in/eric-besson-517763123/"
          className="header_button"
        >
          Linkedin
          <img src={logoLinkedin} alt="logo Linkedin" />
        </a>
        <a href="https://github.com/Eric198809" className="header_button">
          Github
          <img src={logoGithub} alt="logo Github" />
        </a>
      </div>
    </>
  );
};

export default Header;
