import Navbar from "../components/Navbar";
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
import arrowUp from "../assets/arrowup.svg";
import "../style/home.scss";
import { useState, useEffect, useRef } from "react";

function Home() {
  const sectionSkills = useRef(null);
  const sectionProjets = useRef(null);
  const sectionContact = useRef(null);
  const wordsDescription = ["React", "Javascript", "Node JS", "Fullstack"];
  const [currentWord, setCurrentWord] = useState("");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * wordsDescription.length);
      setCurrentWord(wordsDescription[randomIndex]);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [wordsDescription]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav>
        <Navbar
          scrollToSection={scrollToSection}
          sectionSkills={sectionSkills}
          sectionProjets={sectionProjets}
          sectionContact={sectionContact}
        />
      </nav>
      <header>
        <div className="arrow_up" onClick={scrollToTop}>
          <img src={arrowUp} alt="" />
        </div>
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
      </header>
      <section className="section_container" ref={sectionSkills}>
        <div className="title_section">
          <h2>COMPETENCES</h2>
          <div className="line"></div>
        </div>
        <div className="skill_container">
          <h3 className="title_skill">FRONT-END</h3>
          <div className="skill_image">
            <img src={logoReact} alt="react" />
            <p>React</p>
          </div>
          <div className="skill_image">
            <img src={logoJavascript} alt="react" />
            <p>Javascript</p>
          </div>
          <div className="skill_image">
            <img src={logoSass} alt="react" />
            <p>Sass</p>
          </div>
          <div className="skill_image">
            <img src={logoHtml} alt="react" />
            <p>HTML</p>
          </div>
          <div className="skill_image">
            <img src={logoCss} alt="react" />
            <p>CSS</p>
          </div>
          <div className="skill_image">
            <img src={logoWordpress} alt="react" />
            <p>Wordpress</p>
          </div>
        </div>
        <div className="skill_container">
          <h3 className="title_skill">BACK-END</h3>
          <div className="skill_image">
            <img src={logoNode} alt="react" />
            <p>Node JS</p>
          </div>
          <div className="skill_image">
            <img src={logoExpress} alt="react" />
            <p>Express</p>
          </div>
          <div className="skill_image">
            <img src={logoSql} alt="react" />
            <p>SQL</p>
          </div>
        </div>
        <div className="skill_container">
          <h3 className="title_skill">DESIGN</h3>
          <div className="skill_image">
            <img src={logoFigma} alt="react" />
            <p>Figma</p>
          </div>
        </div>
        <div className="skill_container">
          <h3 className="title_skill">OUTILS</h3>

          <div className="skill_image">
            <img src={logoTrello} alt="react" />
            <p>Trello</p>
          </div>
          <div className="skill_image">
            <img src={logoGit} alt="react" />
            <p>Git</p>
          </div>
          <div className="skill_image">
            <img src={logoGithub2} alt="react" />
            <p>Github</p>
          </div>
        </div>
      </section>
      <section className="section_container" ref={sectionProjets}>
        <div className="title_section">
          <h2>PROJETS</h2>
          <div className="line"></div>
        </div>
        <div className="projets_container">
          <div className="content-projet">
            <h3>LE COMPTOIR DES SEELIES</h3>
            <h4>Détails</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              aperiam, nostrum ratione voluptas debitis saepe odit, omnis
              dolorum nihil, iste nam impedit vel quisquam! Consequuntur rem
              magni delectus nisi cum. Iusto voluptatem asperiores itaque
              reiciendis enim sunt impedit modi maiores voluptatibus quo, dicta
              dolor cumque distinctio nisi quos fuga recusandae perferendis odit
              consequatur soluta qui nemo officia tempore aliquam. Porro.
            </p>
            <h4>Stack</h4>
            <div className="images_stacks">
              <img className="logo_stack" src={logoReact} alt="react" />
              <img className="logo_stack" src={logoNode} alt="node" />
              <img className="logo_stack" src={logoSass} alt="sass" />
              <img className="logo_stack" src={logoExpress} alt="express" />
              <img className="logo_stack" src={logoSql} alt="sql" />
            </div>
            <div className="header-buttons">
              <a
                href="https://github.com/WildCodeSchool/11-2023-Rem-FR-Crew-Bleu-LaPromodoro-G2-P3/"
                className="header_button"
              >
                Voir le Github
                <img src={logoGithub} alt="logo Github" />
              </a>
            </div>
          </div>
          <div className="image_projet"></div>
        </div>
        <div className="projets_container">
          <div className="content-projet">
            <h3>GENKO</h3>
            <h4>Détails</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              aperiam, nostrum ratione voluptas debitis saepe odit, omnis
              dolorum nihil, iste nam impedit vel quisquam! Consequuntur rem
              magni delectus nisi cum. Iusto voluptatem asperiores itaque
              reiciendis enim sunt impedit modi maiores voluptatibus quo, dicta
              dolor cumque distinctio nisi quos fuga recusandae perferendis odit
              consequatur soluta qui nemo officia tempore aliquam. Porro.
            </p>
            <h4>Stack</h4>
            <div className="images_stacks">
              <img className="logo_stack" src={logoReact} alt="react" />
              <img className="logo_stack" src={logoCss} alt="css" />
              <img className="logo_stack" src={logoNode} alt="node" />
            </div>
            <div className="header-buttons">
              <a
                href="https://github.com/WildCodeSchool/11-2023-Rem-FR-Crew-Bleu-LaPromodoro-G4"
                className="header_button"
              >
                Voir le Github
                <img src={logoGithub} alt="logo Github" />
              </a>
              <a
                href="https://main--chipper-youtiao-cca0a4.netlify.app/"
                className="header_button"
              >
                Voir le site
                <img src={logoWorld} alt="logo world" />
              </a>
            </div>
          </div>
          <div className="image_projet2"></div>
        </div>
        <div className="projets_container">
          <div className="content-projet">
            <h3>QUE L'AMOUR SOIT AVEC TOI</h3>
            <h4>Détails</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              aperiam, nostrum ratione voluptas debitis saepe odit, omnis
              dolorum nihil, iste nam impedit vel quisquam! Consequuntur rem
              magni delectus nisi cum. Iusto voluptatem asperiores itaque
              reiciendis enim sunt impedit modi maiores voluptatibus quo, dicta
              dolor cumque distinctio nisi quos fuga recusandae perferendis odit
              consequatur soluta qui nemo officia tempore aliquam. Porro.
            </p>
            <h4>Stack</h4>
            <div className="images_stacks">
              <img className="logo_stack" src={logoReact} alt="react" />
              <img className="logo_stack" src={logoCss} alt="css" />
              <img className="logo_stack" src={logoNode} alt="node" />
            </div>
            <div className="header-buttons">
              <a
                href="https://github.com/Eric198809/hackathon"
                className="header_button"
              >
                Voir le Github
                <img src={logoGithub} alt="logo Github" />
              </a>
              <a
                href="https://paul-lac.github.io/QueLAmourSoitAvecToi/"
                className="header_button"
              >
                Voir le site
                <img src={logoWorld} alt="logo world" />
              </a>
            </div>
          </div>
          <div className="image_projet3"></div>
        </div>
      </section>
      <span ref={sectionContact}></span>
    </>
  );
}
export default Home;
