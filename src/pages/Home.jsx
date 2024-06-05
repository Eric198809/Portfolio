import imageheader from "../assets/image_header.svg";
import logoLinkedin from "../assets/linkedin.svg";
import logoGithub from "../assets/github.svg";
import logoJavascript from "../assets/javascript.svg";
import logoSass from "../assets/sass.svg";
import logoHtml from "../assets/html.svg";
import logoCss from "../assets/css.svg";
import logoWordpress from "../assets/wordpress.svg";
import logoNode from "../assets/node.svg";
import logoExpress from "../assets/express.svg";
import logoSql from "../assets/sql.svg";
import logoTrello from "../assets/trello.svg";
import logoFigma from "../assets/figma.svg";
import logoGit from "../assets/git.svg";
import logoGithub2 from "../assets/github2.svg";
import logoReact from "../assets/react.svg";
import logoWorld from "../assets/siteprojet.svg";

import "../style/home.scss";
import { useState, useEffect } from "react";

function Home() {
  const wordsDescription = ["React", "Javascript", "Node JS", "Fullstack"];
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
      <header>
        <div className="title_image_header">
          <h1 className="header_title">
            Hello ,<br />
            I’m Eric Besson <br />
            Web developper <br />
            {currentWord}
          </h1>
          <img src={imageheader} alt="image-header" />
        </div>
        <div className="header-buttons">
          <button className="header_button">
            Linkedin
            <img src={logoLinkedin} alt="logo Linkedin" />
          </button>
          <button className="header_button">
            Github
            <img src={logoGithub} alt="logo Github" />
          </button>
        </div>
      </header>
      <section className="section_container">
        <div className="title_section">
          <h2>SKILLS</h2>
          <div className="line"></div>
        </div>
        <div className="content_skills">
          <h3 className="title_skills">Front-end</h3>
          <div className="skills_images">
            <img src={logoReact} alt="react" />
            <img src={logoJavascript} alt="javascript" />
            <img src={logoSass} alt="sass" />
            <img src={logoHtml} alt="html" />
            <img src={logoCss} alt="css" />
            <img src={logoWordpress} alt="wordrepss" />
          </div>
        </div>
        <div className="content_skills">
          {" "}
          <h3 className="title_skills">Back-end</h3>
          <div className="skills_images">
            <img src={logoNode} alt="node" />
            <img src={logoExpress} alt="express" />
            <img src={logoSql} alt="sql" />
          </div>
        </div>
        <div className="content_skills">
          {" "}
          <h3 className="title_skills">Design</h3>
          <div className="skills_images">
            <img src={logoFigma} alt="figma" />
          </div>
        </div>
        <div className="content_skills">
          {" "}
          <h3 className="title_skills">Outils</h3>
          <div className="skills_images">
            <img src={logoTrello} alt="trello" />
            <img src={logoGit} alt="git" />
            <img src={logoGithub2} alt="github" />
          </div>
        </div>
      </section>
      <section className="section_container">
        <div className="title_section">
          <h2>PROJETS</h2>
          <div className="line"></div>
        </div>
        <div className="projet_container">
          <div className="image_projet"></div>
          <h3>LE COMPTOIR DES SEELIES</h3>
          <div className="détails_projet">
            <div className="résumé">
              <h4>Détails</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente aperiam, nostrum ratione voluptas debitis saepe odit,
                omnis dolorum nihil, iste nam impedit vel quisquam! Consequuntur
                rem magni delectus nisi cum. Iusto voluptatem asperiores itaque
                reiciendis enim sunt impedit modi maiores voluptatibus quo,
                dicta dolor cumque distinctio nisi quos fuga recusandae
                perferendis odit consequatur soluta qui nemo officia tempore
                aliquam. Porro.
              </p>
            </div>
            <div className="stack_projet">
              <h4>Stack</h4>
              <div className="images_stacks">
                <img className="logo_stack" src={logoHtml} alt="" />
                <img className="logo_stack" src={logoCss} alt="" />
              </div>
            </div>
          </div>
          <div className="header-buttons">
            <button className="header_button">
              Voir le Github
              <img src={logoGithub} alt="logo Github" />
            </button>
          </div>
        </div>
        <div className="projet_container">
          <div className="image_projet2"></div>
          <h3>GENKO</h3>
          <div className="détails_projet">
            <div className="résumé">
              <h4>Détails</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente aperiam, nostrum ratione voluptas debitis saepe odit,
                omnis dolorum nihil, iste nam impedit vel quisquam! Consequuntur
                rem magni delectus nisi cum. Iusto voluptatem asperiores itaque
                reiciendis enim sunt impedit modi maiores voluptatibus quo,
                dicta dolor cumque distinctio nisi quos fuga recusandae
                perferendis odit consequatur soluta qui nemo officia tempore
                aliquam. Porro.
              </p>
            </div>
            <div className="stack_projet">
              <h4>Stack</h4>
              <div className="images_stacks">
                <img className="logo_stack" src={logoHtml} alt="" />
                <img className="logo_stack" src={logoCss} alt="" />
              </div>
            </div>
          </div>
          <div className="header-buttons">
            <button className="header_button">
              Voir le Github
              <img src={logoGithub} alt="logo Github" />
            </button>
            <button className="header_button">
              Voir le site
              <img src={logoWorld} alt="logo world" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
