import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navlink from "../Navlink/Navlink";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function Navbar() {
  return (
    <nav className="flex justify-between items-center pv2 fw5 overflow-hidden">
      <Link className="dn flex items-center fw8 link" to="/">
        <Logo height={28} width={28} />
        <p className="ml2 muted-blue">Trevor Dur&aacute;n</p>
      </Link>
      <ul className="flex justify-around">
        <Navlink href="/projects">Projects</Navlink>
        <Navlink href="/resume">R&eacute;sum&eacute;</Navlink>
        <Navlink href="/about">About</Navlink>
        <Navlink href="/contact">Contact</Navlink>
        <button
          type="button"
          className="flex icon input-reset pointer muted-blue f4"
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
