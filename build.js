import { mkdirSync, copyFileSync } from "node:fs";
mkdirSync("dist", { recursive: true });
copyFileSync("src/double.js", "dist/index.js");
console.log("built dist/index.js");
