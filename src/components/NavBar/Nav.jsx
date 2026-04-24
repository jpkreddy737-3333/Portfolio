import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav className="nav">
            <div>PKR</div>
            <ul>
            <li><Link to="/">Home </Link></li>
              <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects </Link></li>
            <li><Link to="/contact">ContactMe </Link></li>
            </ul>
        </nav>
    )
}

export default Nav;