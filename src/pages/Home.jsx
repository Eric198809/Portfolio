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
import EricPortrait from "../assets/PortraitEric.jpg";
import "../style/home.scss";
import { useState, useEffect, useRef } from "react";

function Home() {
  const sectionSkills = useRef(null);
  const sectionProjets = useRef(null);
  const sectionContact = useRef(null);
  const wordsDescription = ["React", "JS", "Node JS", "Front", "Back", "Fullstack"];
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

      <section className="section_container">
        <div className="title_section">
          <h2>A PROPOS </h2>
          <div className="line"></div>
        </div>
        <div className="about_container">
          <img src={EricPortrait} alt="portrait Eric Besson" />
          <p>
            Je m'appelle Eric, j'ai 35 ans et je suis développeur junior. J'ai
            découvert le monde du web et de la programmation en 2022. <br />
            <br />
            Après plus de 10 ans d'éxpérience dans le domaine du
            commerce/marketing j'ai décidé de changer de voie et de me
            reconvertir professionnellement et de faire de ma passion ma
            profession. <br />
            <br />
            J'ai débuté mon apprentissage de manière autonome puis en novembre
            2023 j'ai débuté une formation de{" "}
            <strong> "Développeur web / web mobile</strong> qui m'a permis de
            monter en compétence à la fois sur du développement Front-end et
            Back-end. <br />
            <br />
            Aujourd'hui j'aime imaginer, créer , apprendre sans cesse de nouvelles choses et me lancer dans de nouveaux projets plus passionnants les uns que les autres.
          </p>
        </div>
      </section>
      <section className="section_container" ref={sectionSkills}>
        <div className="title_section">
          <h2>COMPETENCES</h2>
          <div className="line"></div>
        </div>
        <div className="skills-container">
          <div className="skill_container">
            <h3 className="title_skill">DEVELOPPEMENT</h3>
            <h4>FRONT-END</h4>
            <div className="skill_images">
              <div className="skill_image">
                <img src={logoReact} alt="react" />
                <p>React</p>
              </div>
              <div className="skill_image">
                <img src={logoJavascript} alt="logo javascript" />
                <p>Javascript</p>
              </div>
              <div className="skill_image">
                <img src={logoSass} alt="logo sass" />
                <p>Sass</p>
              </div>
              <div className="skill_image">
                <img src={logoHtml} alt="logo html" />
                <p>HTML</p>
              </div>
              <div className="skill_image">
                <img src={logoCss} alt="logo css" />
                <p>CSS</p>
              </div>
              <div className="skill_image">
                <img src={logoWordpress} alt="logo wordpress" />
                <p>Wordpress</p>
              </div>
            </div>
            <h4>BACK-END</h4>
            <div className="skill_images">
              <div className="skill_image">
                <img src={logoNode} alt="logo Node" />
                <p>NodeJS</p>
              </div>
              <div className="skill_image">
                <img src={logoExpress} alt="logo Express" />
                <p>Express</p>
              </div>
              <div className="skill_image">
                <img src={logoSql} alt="logo SQL" />
                <p>SQL</p>
              </div>
            </div>
          </div>

          <div className="skill_container">
            <h3 className="title_skill">GESTION DE PROJET</h3>
            <div className="skill_images">
              <div className="skill_image">
                <img src={logoGit} alt="logo git" />
                <p>Git</p>
              </div>
              <div className="skill_image">
                <img src={logoGithub2} alt="logo github" />
                <p>Github</p>
              </div>
              <div className="skill_image">
                <img src={logoFigma} alt="logo figma" />
                <p>Figma</p>
              </div>
              <div className="skill_image">
                <img src={logoTrello} alt="logo trello" />
                <p>Trello</p>
              </div>
            </div>
          </div>
          <div className="skill_container">
            <h3 className="title_skill">OUTILS</h3>
            <div className="skill_images">
              <div className="skill_image">
                <img src={logoGit} alt="logo git" />
                <p>Postman</p>
              </div>
              <div className="skill_image">
                <img src={logoGithub2} alt="logo github" />
                <p>MySQL Workbench</p>
              </div>
            </div>
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
              Troisième et dernier projet de ma formation développeur web/web mobile.  <br />
              Le comptoir des Seelies est un site e-commerce de produits artisanaux commandé par quatre amies afin de faire découvrir leur univers féérique et leurs créations faites mains.
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
              Deuxieme projet mené lors de ma formation Développeur web/web mobile. <br /> Ce petit site permet l'apprentissage du français de façon ludique à travers de petits jeux. <br />
              L'objectif est de franchir quatre niveaux en accumulant assez de point pour passer au niveau supérieur.
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
              Projet mené en groupe dans le cadre d'un hackathon de deux jours. <br />
              Choissez votre personnage et essayez de trouver l'amour lors d'un jobdating en répondant correctement aux questions de votre prétentent(e)
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
