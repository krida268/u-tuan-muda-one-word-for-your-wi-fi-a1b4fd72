// One Word for Your Wi-Fi — writes a single word to /output/entry.txt.
//
// The word: "Ghosting". Home Wi-Fi shows full bars, then vanishes
// mid-sentence without a word of explanation, exactly like a date who
// stops replying. One word, instantly understood, and true to how
// Wi-Fi actually behaves at home.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Ghosting";

// The gate wants 1 to 20 UTF-8 characters, not only white space.
// Refuse to write anything that would fail it, rather than emit a
// bad entry and hope the scorer is forgiving.
if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
  throw new Error(`word fails the 1-20 character gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
