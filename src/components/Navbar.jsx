import { Link } from "react-router-dom";
import "../style/navbar.scss";

function Navbar() {
  return (
    <nav className="header">
      <ul className="head-menu">
        <li>
          <Link to="/">Skills</Link>
        </li>
        <li>
          <Link to="/">Projets</Link>
        </li>
        <li>
          <Link to="/">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
