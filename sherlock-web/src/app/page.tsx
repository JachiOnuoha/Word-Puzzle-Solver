'use client'

import { FontSizes, Label, PrimaryButton, Stack, TextField } from "@fluentui/react";
import Image from "next/image";
import { WordPuzzleSolver } from "./puzzle-engine/puzzle-solver";
import localFont from 'next/font/local';

export default function Home() {
  const puzzle = ["TPIRCSAVAJLEXIPIGE", "LIAMEMORYMMOUSENIL", "CRABKSATXINUYHSTFG", "DNDIRECTORYETAOEOO",
    "POWERSUPPLYNIRFRLO", "UCOASAEVASSCRETNDG", "KIROPKTYPSHRUWWEEL", "CDDECPREEAHYCAATRM",
    "ANRIMALLTDRPERREAT", "BOLENMEIEKETSEEPHH", "RCKIPRAFCVRIIRSULM", "EEBEIARRIABOOTMBOR",
    "NSTWRAPRGRTNWBINGO", "NOOSGNDLOODINTIOIS", "ANGMAKAULARAOTEANR", "CAEASPTLTAIPONRNDU",
    "SNFIREWALLWREIKOOC", "TFDPRDHTOOTEULBYTE"];
  let newPuzz: string[][] = []

  for (const word of puzzle) {
    let arr = [...word]
    newPuzz.push(arr)
  }

  let list = ["APPLICATION", "BACKUP", "BINARY", "BLUETOOTH", "BOOT", "BYTE", "CHAT", "CLICK", "COOKIE", "CURSOR",
    "DATA", "DEFRAGMENT", "DIRECTORY", "DISKDRIVE", "DOS", "DRAG", "EMAIL", "ENCRYPTION", "FILE", "FIREWALL",
    "FOLDER", "GIF", "GOOGLE", "HTML", "ICON", "INTERNET", "JAVASCRIPT", "KERNAL", "LCD", "LOGIN",
    "MEMORY", "MONITOR", "MOUSE", "NANOSECOND", "NETWORK", "PARTITION", "PASTE", "PDF", "PIXEL", "PROGRAMMER",
    "ROUTER", "SAVEAS", "SCANNER", "SECURITY", "SHAREWARE", "SOFTWARE", "SPAM", "TASKBAR", "THUMBNAIL", "UNIX",
    "WALLPAPER", "WIRELESS", "POWERSUPPLY"];

  let myClass = new WordPuzzleSolver;
  // myClass.solve(newPuzz,list);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Stack tokens={{childrenGap: 25}}>
            <TextField
              width={500}
              placeholder='Enter puzzle image url'
            />
            < PrimaryButton
              className="dark"
              width={20}
              height={20}
              text=" Let's Solve it!!"
            />
          </Stack>
          {/* <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a> */}
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
