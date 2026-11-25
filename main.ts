// One-Line Office Joke: 24-Hour Sprint — @bindu entry.
// Writes exactly one line to /output/entry.txt, then reads it back
// and throws unless it is 1-200 UTF-8 characters and not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My out-of-office reply auto-replied to another out-of-office reply, and now two robots are having a meeting without me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the file must hold exactly the line, 1-200
// characters, and not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match the joke line exactly");
}
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry.txt is ${back.length} characters; must be 1-200`);
}
if (back.trim().length === 0) {
  throw new Error("entry.txt is only whitespace");
}
console.log(`Wrote and verified ${back.length} characters in /output/entry.txt`);
