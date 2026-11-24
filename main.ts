// Last Text at One Percent — make.fun one-liner entry.
// The joke: with 1% battery left, the phone's owner uses the final
// moments for the three things that matter most — a goodbye to Mom,
// a compliment to the dog, and deleting the browser history before
// anyone can see it. The program writes that one line, and only
// that line, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// locally). Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "1% battery. Tell Mom I love her, tell the dog he's a good boy, and delete my browser history before anyone sees it. This is goodbye.";

// The competition requires exactly one line of 1-200 characters.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error(
    `Invalid entry line: expected a single line of 1-200 characters, got ${LINE.length} characters.`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
