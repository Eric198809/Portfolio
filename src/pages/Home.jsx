import imageheader from "../assets/image_header.svg";
import logoLinkedin from "../assets/linkedin.svg";
import logoGithub from "../assets/github.svg";
import logoJavascript from "../assets/javascript.svg";
import logoSass from "../assets/sass.svg";
import logoHtml from "../assets/html.svg";
import logoCss from "../assets/css.svg";
import logoWordpress from "../assets/wordpress.svg";
import logoReact from "../assets/react.svg";
import "../style/home.scss";

function Home() {
  return (
    <>
      <header>
        <div className="title_image_header">
          <h1 className="header_title">
            Hello ,<br />
            I’m Eric Besson <br />
            Web developper
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
      <section className="skills_container">
        <div className="title_section">
          <h2>SKILLS</h2>
          <div className="line"></div>
        </div>
        <div className="content_skills">
          <h3>Front-end</h3>
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
          <h3>Back-end</h3>
          <div className="skills_images"></div>
        </div>
        <div className="content_skills">
          {" "}
          <h3>Design</h3>
          <div className="skills_images"></div>
        </div>
        <div className="content_skills">
          {" "}
          <h3>Outils</h3>
          <div className="skills_images"></div>
        </div>
      </section>
    </>
  );
}
export default Home;
