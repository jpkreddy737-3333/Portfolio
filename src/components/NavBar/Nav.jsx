import "./Nav.css";


function Nav(){
    return (
        <nav className="nav">
            <div>PKR</div>
            <ul>
            <li><a href="#About">About Me</a></li>
            <li><a href="#Skill">Skills</a></li>
            <li><a href="#Project">Projects</a></li>
            <li><a href="#Contact">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Nav;