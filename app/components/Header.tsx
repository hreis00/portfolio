import { HeaderGenerateEffect } from "@/app/components/ui/HeaderGenerateEffect";
import { TextGenerateEffect } from "@/app/components/ui/TextGenerateEffect";
import { fira_code, jetbrains_mono, roboto_mono } from "../lib/fonts";
import { GeistMono } from "geist/font/mono";

const header = `Hugo Reis - Web Developer`;

const description = `Technology enthusiast, with a particular fondness for programming and
  a passion for innovative challenges. Always seeking to expand
  knowledge and open to challenging opportunities. Interested in sports,
  with a special focus on the world of football.`;

export default function Header() {
  return (
    <header className="py-20 px-4 h-dvh flex items-center justify-center snap-center">
      <div className="container mx-auto text-center">
        <HeaderGenerateEffect
          words={header}
          className={`${GeistMono.className} mb-8`}
        />

        <TextGenerateEffect
          words={description}
          className={`${roboto_mono.className}`}
        />
      </div>
    </header>
  );
}
