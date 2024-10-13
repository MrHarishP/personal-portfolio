// import "./App.css";
import Navbar from "./components/Navbar";
import Project from "./components/projects/project";
import Footer from "./components/footer/footer";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />
        {/* <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/experience" element={<Experience />} /> */}
        <Route path="/project" element={<Project />}/>
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Footer />} /> */}
      </Routes>
      <Footer />
     </Router>

    </>
  );
}

export default App;
