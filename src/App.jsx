import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";

export default function App() {
  useEffect(() => {
    document.title = "Saurabh Kumar Dubey | Full Stack Developer";
  }, []);

  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-brand-text-muted/50 border-t border-white/5 px-[5vw]">
        &copy; {new Date().getFullYear()} Saurabh Kumar Dubey. Built with passion.
      </footer>
    </>
  );
}
