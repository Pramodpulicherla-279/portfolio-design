import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import useReveal from './hooks/useReveal.js';

export default function App() {
  // One observer for every `.reveal` element on the page.
  useReveal();

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
