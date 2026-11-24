// Last Text at One Percent: writes the entry line to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "1% battery. Tell Mom I love her, tell the dog he's a good boy, and delete my browser history before anyone sees it. This is goodbye.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
