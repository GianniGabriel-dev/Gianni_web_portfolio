import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "media-src");
const outDir = path.join(root, "public");
const force = process.argv.includes("--force");

function findGifs(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...findGifs(full));
    else if (entry.toLowerCase().endsWith(".gif")) out.push(full);
  }
  return out;
}

function run(args) {
  try {
    execFileSync(ffmpegPath, args, { stdio: ["ignore", "ignore", "pipe"] });
  } catch (err) {
    if (err.stderr) process.stderr.write(err.stderr.toString());
    throw err;
  }
}

const gifs = findGifs(srcDir);
if (gifs.length === 0) {
  console.log(`No GIFs found in ${srcDir}`);
  process.exit(0);
}

for (const gif of gifs) {
  const rel = path.relative(srcDir, gif);
  const base = rel.slice(0, -path.extname(rel).length);
  const mp4 = path.join(outDir, `${base}.mp4`);
  const poster = path.join(outDir, `${base}.jpg`);
  mkdirSync(path.dirname(mp4), { recursive: true });

  if (force || !existsSync(mp4)) {
    run([
      "-y", "-i", gif,
      "-c:v", "libx264",
      "-crf", "20",
      "-preset", "veryslow",
      "-pix_fmt", "yuv420p",
      "-an",
      "-movflags", "+faststart",
      mp4,
    ]);
    console.log(`mp4    ${rel} -> ${path.relative(root, mp4)}`);
  } else {
    console.log(`skip   ${path.relative(root, mp4)} (exists)`);
  }

  if (force || !existsSync(poster)) {
    run(["-y", "-i", gif, "-frames:v", "1", "-q:v", "3", poster]);
    console.log(`poster ${rel} -> ${path.relative(root, poster)}`);
  } else {
    console.log(`skip   ${path.relative(root, poster)} (exists)`);
  }
}

console.log("Done.");
