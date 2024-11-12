import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Colors from "./Components/Colors/Colors";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Colors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
