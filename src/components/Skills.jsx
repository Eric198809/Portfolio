
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
import postman from "../assets/postman.svg";
import logoGithub2 from "../assets/github2.svg";
import mysqlWorkbench from "../assets/mysqlworkbench.svg";
import logoReact from "../assets/react.svg";


const Skills = () => {
  return (
    <>
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
                <img src={postman} alt="logo postman" />
                <p>Postman</p>
              </div>
              <div className="skill_image">
                <img src={mysqlWorkbench} alt="logo mysqlworkbench" />
                <p>Workbench</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Skills;