import projets from "../json/Projets.json";
import ProjetCard from "./ProjetCard";
import { useState } from "react";

const Projets = () => {
  const projetsMenu = ["React", "Javascript", "TypeScript", "PHP (wordpress)"];
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <>
      <div className="container_projets_menu">
        <ul>
          {projetsMenu.map((menu, index) => (
            <li value={menu} key={index} onClick={() => setSelectedMenu(menu)}>
              {menu}
            </li>
          ))}
        </ul>
      </div>
      <div>
       {selectedMenu ? 
          projets.filter((projet) => projet.categorie.includes(selectedMenu))
          .map((projet) => (
            <ProjetCard key={projet.id} projet={projet} />
          )) :
          projets.map((projet) => (
            <ProjetCard key={projet.id} projet={projet} />))}
      </div>
    </>
  );
};

export default Projets;
