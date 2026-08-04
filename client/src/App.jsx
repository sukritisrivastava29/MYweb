import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import Background from "./components/Background";
import Cursor from "./components/Cursor";
function App() {
  return (
    <>
  <Navbar />

  <main className="pt-24">
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Resume />
    <Contact />
   
  </main>
</>
  );
}

export default App;