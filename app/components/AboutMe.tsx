import { GeistMono } from "geist/font/mono";
import { roboto_mono } from "../lib/fonts";

export default function AboutMe() {
  return (
    <section className="container flex flex-col justify-center max-w-2xl mx-auto h-dvh snap-center">
      <h2
        className={`${GeistMono.className} dark:text-zinc-100 text-zinc-900 font-bold mb-8 text-xl text-center md:text-3xl md:px-8 md:text-left`}
      >
        Get to know me...
      </h2>
      <div className="p-8 mx-auto border-4 border-zinc-200/10 bg-gradient-to-r from-zinc-900/20 via-zinc-800/20 to-zinc-900/20 rounded-xl backdrop-blur-sm backdrop-opacity-50">
        <div
          className={`${roboto_mono.className} dark:text-zinc-200/80 text-zinc-800/40 text-sm font-semibold text-justify leading-relaxed space-y-4 md:text-base`}
        >
          <p>
            I{"'"}m a web developer based in Portugal with 23 years of life
            experience. Recently finished my degree in Informatics, so I look
            forward to start my journey in this big 🌍
          </p>
          <p>
            I like to think that I{"'"}m well organized, hard worker and
            passionate at whatever I do 🤓
          </p>
          <p>
            This porfolio was made to showcase my skills and projects, to either
            inspire someone or most important, get a job. I really need a job 👀
          </p>
        </div>
      </div>
    </section>
  );
}
