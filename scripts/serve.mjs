// Minimal static server for checking the production build locally with the
// same clean-URL rules as the host: /privacy -> privacy.html, unknown -> 404.
// Usage: npm run preview   (then open http://localhost:4173)

import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist", import.meta.url));
const port = Number(process.env.PORT || 4173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

const isFile = (p) => existsSync(p) && statSync(p).isFile();

function resolve(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath)).replace(/^([/\\])+/, "");
  if (clean.includes("..")) return null;
  const base = join(dist, clean);
  if (urlPath === "/" || urlPath === "") return join(dist, "index.html");
  if (isFile(base)) return base;
  const trimmed = base.replace(/[/\\]+$/, "");
  if (isFile(`${trimmed}.html`)) return `${trimmed}.html`;
  return null;
}

createServer((req, res) => {
  const url = new URL(req.url || "/", "http://localhost");
  const file = resolve(url.pathname);
  const status = file ? 200 : 404;
  const target = file ?? join(dist, "404.html");
  res.writeHead(status, {
    "Content-Type": TYPES[extname(target)] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  res.end(readFileSync(target));
}).listen(port, () => console.log(`Serving dist/ on http://localhost:${port}`));
