import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Colors from "./Components/Colors/Colors";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Portfolio from "./Pages/Portfolio/Portfolio";
import WorkExperience from "./Pages/Work Experience/WorkExperience";

function App() {
  return (
    <>
      <Header />
      <Colors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
