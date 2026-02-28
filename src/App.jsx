import Home from "./components/Home/Home";
import Nav from "./components/NavBar/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";


function App(){
  return(
    <div>
       <Nav />
       <Home />
       <About />
       <Skills />
       <Project />
       <Contact />
    </div>
  )
}

export default App;