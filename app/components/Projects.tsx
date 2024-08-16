import { GeistMono } from "geist/font/mono";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Enhance E-Sports Group",
    description:
      "Demonstrative website for an E-Sports research group made with Next.js.",
    link: "https://enhance-esports.vercel.app/",
    color: "bg-zinc-800",
  },
  {
    title: "Theadless",
    description: "Social media for artists using the MERN Stack with Vite.",
    link: "#",
    color: "bg-zinc-800",
  },
];

export default function Projects() {
  return (
    <section className="container flex flex-col justify-center max-w-2xl mx-auto h-dvh snap-center">
      <h2
        className={`${GeistMono.className} dark:text-zinc-100 text-zinc-900 font-bold mb-8 px-0 text-xl text-center md:text-left md:px-8 md:text-3xl`}
      >
        Projects built so far...
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
