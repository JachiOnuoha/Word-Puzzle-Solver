'use client';
import { PrimaryButton } from "@fluentui/react";
import { WordPuzzleSolver } from "../puzzle-engine/puzzle-solver";


const puzzle = ["TPIRCSAVAJLEXIPIGE", "LIAMEMORYMMOUSENIL", "CRABKSATXINUYHSTFG", "DNDIRECTORYETAOEOO",
    "POWERSUPPLYNIRFRLO", "UCOASAEVASSCRETNDG", "KIROPKTYPSHRUWWEEL", "CDDECPREEAHYCAATRM",
    "ANRIMALLTDRPERREAT", "BOLENMEIEKETSEEPHH", "RCKIPRAFCVRIIRSULM", "EEBEIARRIABOOTMBOR",
    "NSTWRAPRGRTNWBINGO", "NOOSGNDLOODINTIOIS", "ANGMAKAULARAOTEANR", "CAEASPTLTAIPONRNDU",
    "SNFIREWALLWREIKOOC", "TFDPRDHTOOTEULBYTE"];
  let newPuzz: string[][] = []

  for (const word of puzzle) {
    let arr = Array.from(word)
    newPuzz.push(arr)
  }

  let list = ["APPLICATION", "BACKUP", "BINARY", "BLUETOOTH", "BOOT", "BYTE", "CHAT", "CLICK", "COOKIE", "CURSOR",
    "DATA", "DEFRAGMENT", "DIRECTORY", "DISKDRIVE", "DOS", "DRAG", "EMAIL", "ENCRYPTION", "FILE", "FIREWALL",
    "FOLDER", "GIF", "GOOGLE", "HTML", "ICON", "INTERNET", "JAVASCRIPT", "KERNAL", "LCD", "LOGIN",
    "MEMORY", "MONITOR", "MOUSE", "NANOSECOND", "NETWORK", "PARTITION", "PASTE", "PDF", "PIXEL", "PROGRAMMER",
    "ROUTER", "SAVEAS", "SCANNER", "SECURITY", "SHAREWARE", "SOFTWARE", "SPAM", "TASKBAR", "THUMBNAIL", "UNIX",
    "WALLPAPER", "WIRELESS", "POWERSUPPLY"];

  let myClass = new WordPuzzleSolver;

export default function SubmitButton() {
    return (
        <>
            < PrimaryButton
              className="dark"
              width={20}
              height={20}
              text=" Let's Solve it!!"
              onClick={()=> {
                myClass.solve(newPuzz, list);
                console.log(newPuzz);
            }}
            />
        </>)
};