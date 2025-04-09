import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import About from "./components/About";
import GeneratedResume from "./components/GeneratedResume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/generated-resume" element={<GeneratedResume />} />
      </Routes>
    </div>
  );
}

export default App;
