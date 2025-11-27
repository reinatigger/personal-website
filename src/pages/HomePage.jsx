import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Hobby from "../components/Hobby";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Hobby />
      <Experiences />
      <Projects />
      <Footer />
    </>
  );
}
