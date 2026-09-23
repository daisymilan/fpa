import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public", "images");
const outDir = path.join(publicDir, "og");
fs.mkdirSync(outDir, { recursive: true });

const jobs = [{ src: path.join(publicDir, "og-image.jpg"), out: path.join(outDir, "default.jpg") }];

const portfolioDir = path.join(publicDir, "portfolio");
for (const project of fs.readdirSync(portfolioDir)) {
  const cover = fs.readdirSync(path.join(portfolioDir, project)).find((f) => /^cover\.(jpe?g|png|webp)$/i.test(f));
  if (cover) jobs.push({ src: path.join(portfolioDir, project, cover), out: path.join(outDir, `${project}.jpg`) });
}

for (const { src, out } of jobs) {
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs) continue;
  await sharp(src).resize(1200, 630, { fit: "cover" }).jpeg({ quality: 80, mozjpeg: true }).toFile(out);
  console.log(`og image: ${path.relative(process.cwd(), out)}`);
}
