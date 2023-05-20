const path = require("path");

console.log(path.resolve());

const filePath = path.join("/Built-in-modules", "path.js");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "Build-in-module", "path.js");
console.log(absolute);