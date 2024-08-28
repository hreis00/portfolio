import { GeistMono } from "geist/font/mono";
import { roboto_mono } from "../lib/fonts";

export default function Experience() {
  return (
    <div>
      <h2 className={`${GeistMono.className} text-lg font-bold mb-4`}>
        Past experience:
      </h2>
      <p
        className={`${roboto_mono.className} dark:text-zinc-200/80 text-zinc-800/40 text-sm font-semibold text-justify`}
      >
        Professional internship at college using{" "}
        <span className="font-extrabold dark:text-zinc-200 text-zinc-800 text-base">
          Visual Basic for Applications (VBA)
        </span>
        ,{" "}
        <span className="font-bold dark:text-zinc-200 text-zinc-800 text-base">
          .NET
        </span>{" "}
        and{" "}
        <span className="font-bold dark:text-zinc-200 text-zinc-800 text-base">
          Microsoft SQL Server
        </span>
        .
      </p>
    </div>
  );
}
