import { GeistMono } from "geist/font/mono";
import { roboto_mono } from "../lib/fonts";
import Tools from "./Tools";
import Experience from "./Experience";
import Links from "./Links";

export default function AboutMe() {
  return (
    <section
      className="container flex flex-col justify-center max-w-2xl mx-auto h-dvh"
      id="about"
    >
      <h2
        className={`${GeistMono.className} dark:text-zinc-100 text-zinc-900 font-bold mb-8 text-xl text-center md:text-3xl md:px-8 md:text-left`}
      >
        Get to know me...
      </h2>
      <div className="p-8 mx-auto border-4 border-zinc-200/10 bg-gradient-to-r from-zinc-900/20 via-zinc-800/20 to-zinc-900/20 rounded-xl backdrop-blur-sm backdrop-opacity-50">
        <div>
          <div className="space-y-4">
            <Experience />
            <Tools />
            {/* <Links /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
