import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import { roboto_mono } from "../lib/fonts";
import {
  IoHomeOutline,
  IoBriefcaseOutline,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

import Links from "./Links";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 z-10 flex items-center justify-center mx-auto mb-4 -translate-x-1/2 left-1/2">
      <div className="flex flex-row py-2 duration-300 ease-in border divide-x rounded-full delay-50 hover:scale-110 divide-zinc-50/20 border-zinc-50/10 text-zinc-50/50 bg-zinc-950">
        <div className="flex px-4 py-1 space-x-4">
          <div className="relative flex group">
            <Link href="#home">
              <span className="absolute px-2 py-1 mx-auto text-sm text-gray-100 transition-opacity -translate-x-1/2 -translate-y-8 bg-gray-800 rounded-md opacity-0 group-hover:opacity-80 left-1/2">
                Home
              </span>
              <IoHomeOutline className="size-4 md:size-5" />
            </Link>
          </div>
          <div className="relative flex group">
            <Link href="#projects">
              <span className="absolute px-2 py-1 mx-auto text-sm text-gray-100 transition-opacity -translate-x-1/2 -translate-y-8 bg-gray-800 rounded-md opacity-0 group-hover:opacity-80 left-1/2">
                Projects
              </span>
              <IoBriefcaseOutline className="size-4 md:size-5" />
            </Link>
          </div>
        </div>
        <div className="flex px-4 py-1 space-x-4">
          <div className="relative flex group">
            <Link
              href="https://www.linkedin.com/in/hugosareis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute px-2 py-1 mx-auto text-sm text-gray-100 transition-opacity -translate-x-1/2 -translate-y-8 bg-gray-800 rounded-md opacity-0 group-hover:opacity-80 left-1/2">
                LinkedIn
              </span>
              <IoLogoLinkedin className="size-4 md:size-5" />
            </Link>
          </div>
          <div className="relative flex group">
            <Link
              href="https://github.com/hreis00/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute px-2 py-1 mx-auto text-sm text-gray-100 transition-opacity -translate-x-1/2 -translate-y-8 bg-gray-800 rounded-md opacity-0 group-hover:opacity-80 left-1/2">
                GitHub
              </span>
              <IoLogoGithub className="size-4 md:size-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
