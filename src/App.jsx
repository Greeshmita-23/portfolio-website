import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import GitHubProjects from "./components/GitHubProjects";
import GithubStats from "./components/GithubStats";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <Achievements />
      <Projects />
      <GitHubProjects />
      <GithubStats />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;