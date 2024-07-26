import projets from "../json/Projets.json";
import ProjetCard from "./ProjetCard";

const Projets = () => {
  return (
    <div>
      {projets.map((projet) => (
        <ProjetCard key={projet.id} projet={projet} />
      ))}
    </div>
  );
};

export default Projets;
