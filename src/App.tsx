import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-ink)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <TechStack />
        <Services />
        <Projects />
        <Stats />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
