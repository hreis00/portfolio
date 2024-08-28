import Link from "next/link";
// SVG
import LinkedIn from "@/public/svgs/linkedin";
import GitHub from "@/public/svgs/github";
import Curriculum from "@/public/svgs/curriculum";
import Location from "@/public/svgs/location";
// FONTS
import { fira_code, jetbrains_mono, roboto_mono } from "../lib/fonts";

export default function Links() {
  return (
    <div className={`${roboto_mono.className} md:flex md:space-x-4`}>
      <div className="self-center">
        <Link
          href="https://github.com/hreis00/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="size-6 md:size-10 invert" />
        </Link>
      </div>
      <div className="self-center">
        <Link
          href="https://www.linkedin.com/in/hugosareis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="size-6 md:size-10" />
        </Link>
      </div>
    </div>
  );
}
