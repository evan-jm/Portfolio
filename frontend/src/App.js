import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Projects from "./pages/Projects/Projects.js";
import Experience from "./pages/Experience/Experience.js";
import Education from "./pages/Education/Education.js";
import Contact from "./pages/Contact/Contact.js";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/experience" element={<Experience />} />
          <Route path="/Portfolio/education" element={<Education />} />
          <Route path="/Portfolio/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
