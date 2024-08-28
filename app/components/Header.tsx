// COMPONENTS
import { HeaderGenerateEffect } from "@/app/components/ui/HeaderGenerateEffect";
import { TextGenerateEffect } from "@/app/components/ui/TextGenerateEffect";
// SVG
import Location from "@/public/svgs/location";
// FONTS
import { fira_code, jetbrains_mono, roboto_mono } from "../lib/fonts";
import { GeistMono } from "geist/font/mono";
// ICONS
import {
  IoLocationSharp,
  IoPinSharp,
  IoDocument,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

const header = `Hi, I'm Hugo 😁`;

const description = `Recently finished a degree in Computer Science and am ready for some real world challenges.`;

export default function Header() {
  return (
    <header
      className="flex items-center justify-center px-4 py-20 h-dvh"
      id="home"
    >
      <div className="container max-w-3xl mx-auto text-center md:max-w-lg">
        <HeaderGenerateEffect
          words={header}
          className={`${GeistMono.className} mb-8`}
        />

        {/* <TextGenerateEffect
          words={description}
          className={`${roboto_mono.className}`}
        /> */}
        <div className={`${roboto_mono.className}`}>
          <p className="text-lg">
            Recently finished a degree in Computer Science and am ready for some
            real world challenges.
          </p>
          <div className="flex justify-end p-4">
            <div className="flex items-center space-x-2">
              <Location className="size-6 md:size-8 fill-red-700" />
              <span className="text-sm md:text-base">Lisbon, Portugal</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
