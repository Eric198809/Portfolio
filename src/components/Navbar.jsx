import { Link } from "react-router-dom";
import "../style/navbar.scss";

function Navbar({
  sectionSkills,
  sectionProjets,
  sectionContact,
  scrollToSection,
}) {
  return (
    <nav className="header">
      <ul className="head-menu">
        <li onClick={() => scrollToSection(sectionSkills)}>
          <Link to="/">Skills</Link>
        </li>
        <li onClick={() => scrollToSection(sectionProjets)}>
          <Link to="/">Projets</Link>
        </li>
        <li onClick={() => scrollToSection(sectionContact)}>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
