import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="px-4 mx-auto scroll-smooth">
      <Navigation />
      <Header />
      <AboutMe />
      <Projects />
    </main>
  );
}
