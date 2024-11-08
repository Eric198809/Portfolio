import EricPortrait from "../assets/PortraitEric.jpg";
import EricPortrait2 from"/Eric-23.jpg";

const About = () => {
  return (
    <>
       <div className="title_section">
          <h2>A PROPOS </h2>
          <div className="line"></div>
        </div>
        <div className="about_container">
          <img src={EricPortrait2} alt="portrait Eric Besson" />
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
            Aujourd'hui j'aime imaginer, créer , apprendre sans cesse de
            nouvelles choses et me lancer dans de nouveaux projets plus
            passionnants les uns que les autres.
          </p>
        </div>
    </>
  );
};

export default About;