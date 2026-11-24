import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dir, "out");
mkdirSync(outDir, { recursive: true });
// Entry: the single letter "Z" — one letter for your day.
copyFileSync(join(dir, "entry.txt"), join(outDir, "entry.txt"));
