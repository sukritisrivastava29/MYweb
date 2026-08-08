import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="resume">
        <Resume />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}