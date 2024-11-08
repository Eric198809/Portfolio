import logoGithub from "../assets/github.svg";
import logoWorld from "../assets/siteprojet.svg";

const ProjetCard = ({ projet }) => {
  return (
    <div>
      <div className="projets_container">
        <div className="content-projet">
          <h3>{projet.titre}</h3>
          <h4>Détails</h4>
          <p>{projet.content}</p>
          <h4>Stack</h4>
          <div className="images_stacks">
            {projet.imageStack.map((imageStack, index) => (
              <img
                key={index}
                className="logo_stack"
                src={imageStack}
                alt={imageStack.stack}
              />
            ))}
          </div>
          <div className="header-buttons">
            <a href={projet.githubLink} className="header_button">
              Voir le Github
              <img src={logoGithub} alt="logo Github" />
            </a>
           { projet.website && <a href={projet.website} className="header_button">
              Voir le site
              <img src={logoWorld} alt="logo world" />
            </a>}
          </div>
        </div>
        <img className="image_projet" src={projet.image} />
      </div>
    </div>
  );
};

export default ProjetCard;
