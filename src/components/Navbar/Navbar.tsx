import './Navbar.css';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'

function Navbar() {
  return <>
    <header></header>
    <nav>
      <Link to="/"><Logo height={28} /></Link>
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">R&eacute;sum&eacute;</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav >
  </>
}

export default Navbar;
