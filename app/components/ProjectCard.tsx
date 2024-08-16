import { GeistMono } from "geist/font/mono";
import { roboto_mono } from "../lib/fonts";
import { link } from "fs";

export default function ProjectCard({
  title,
  description,
  link,
  color,
}: {
  title: string;
  description: string;
  link: string;
  color: string;
}) {
  return (
    <a href={`${link}`} target="_blank" className="block group mx-auto">
      <div className="container overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-lg group-hover:scale-105">
        <div
          className={`h-32 md:h-48 ${color} flex items-center justify-center`}
        >
          <span
            className={`${GeistMono.className} text-zinc-100 md:text-3xl text-xl text-center`}
          >
            {title}
          </span>
        </div>
        <div className="p-6 bg-zinc-200">
          <h3
            className={`${GeistMono.className} md:text-xl text-base font-semibold text-zinc-900`}
          >
            {title}
          </h3>
          <p
            className={`${roboto_mono.className} text-zinc-900 md:text-base text-sm`}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
