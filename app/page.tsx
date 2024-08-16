import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="mx-auto px-4 scroll-smooth h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
      <Header />
      <AboutMe />
      <Projects />
    </main>
  );
}
