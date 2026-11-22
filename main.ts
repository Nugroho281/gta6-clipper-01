// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is the YouTube video named in VIDEO.json at this
// repository's root: a 40-second vertical clip (1080x1920) cut from the
// ~39:57-40:37 ambush shootout in Windah Basudara's record-breaking GTA VI
// launch stream (13.9M views, world #1 GTA VI streamer on launch day),
// carrying make.fun's pitch as on-screen text over its final 9 seconds. This program's
// whole job is to hand that file to the grader: it copies VIDEO.json from the
// bot directory into the output directory, byte for byte. Nothing it writes
// about the video is scored; the house reads the video's views from YouTube.
//
// Local run (MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and
// /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy ${source} to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
