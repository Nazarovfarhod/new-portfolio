import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <div className=" container mx-auto">
          <div className="sticky top-0 z-20">
            <Navbar />
          </div>
          <div id="home" className="text-center mb-5">
            <Header />
          </div>
          <div className="w-full text-center">
            <h1 className="text-3xl tracking-[4px] mb-10 font-bold md:text-4xl md:mb-16 lg:text-5xl lg:mb-20">
              Frontend Developer
            </h1>
          </div>
          <div id="about" className="text-center  mb-10 md:mb-16 lg:mb-20">
            <About />
          </div>
          <div id="projects" className="text-center">
            <Projects />
          </div>
          <div id="skills" className="text-center">
            <h1>Skills </h1>
          </div>
          <div id="contact" className="text-center">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
