import { GeistMono } from "geist/font/mono";

import Vite from "@/public/svgs/tech&tools/vite";
import NextJs from "@/public/svgs/tech&tools/nextjs";
import NodeJs from "@/public/svgs/tech&tools/nodejs";
import Javascript from "@/public/svgs/tech&tools/javascript";
import MongoDB from "@/public/svgs/tech&tools/mongodb";
import ReactJs from "@/public/svgs/tech&tools/reactjs";
import Tailwind from "@/public/svgs/tech&tools/tailwind";
import CSS from "@/public/svgs/tech&tools/css";
import HTML from "@/public/svgs/tech&tools/html";
import ExpressJs from "@/public/svgs/tech&tools/expressjs";
import Git from "@/public/svgs/tech&tools/git";
import VSCode from "@/public/svgs/tech&tools/vscode";

export default function Tools() {
  return (
    <div>
      <h2 className={`${GeistMono.className} text-sm mb-4`}>
        <span className="text-lg font-bold">Technologies and tools</span> I{"'"}
        ve been using lately:
      </h2>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-2 place-items-center md:grid-cols-4">
        <HTML className="size-6 md:size-10" />
        <CSS className="size-6 md:size-10" />
        <Javascript className="size-6 md:size-10" />
        <ReactJs className="size-6 md:size-10" />
        <Vite className="size-6 md:size-10" />
        <NextJs className="size-6 md:size-10 invert" />
        <NodeJs className="size-6 md:size-10" />
        <ExpressJs className="size-6 md:size-10 invert" />
        <MongoDB className="size-6 md:size-10" />
        <Tailwind className="size-6 md:size-10" />
        <Git className="size-6 md:size-10" />
        <VSCode className="size-6 md:size-10" />
      </div>
    </div>
  );
}
