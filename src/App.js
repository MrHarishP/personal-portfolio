import "./App.css";
import Navbar from "./components/Navbar";
import Education from "./components/education/Education";
import Herosection from "./components/hero-section/Herosection";
import About from "./components/hero-section/about/About";
import Skill from "./components/skill/skill";
import Experience from "./components/experience/experience";
import Contact from "./components/contact-me/contact";
import Footer from "./components/footer/footer";
import Project from "./components/projects/project";
function App() {
  return (
    <>
      <Navbar />

      <Herosection />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
