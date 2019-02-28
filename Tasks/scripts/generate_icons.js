const path = require("path");
const fs = require("fs");
const child_process = require("child_process");

const source = path.resolve(__dirname, `../public/logo_512.svg`);
const sizes = [512, 192, 144, 96, 72, 48];

sizes.forEach(size => {
  const target = path.resolve(__dirname, `../public/icon-${size}-${size}.png`);

  const inkscapeCmd = `
        inkscape -z ${source}
        --export-png=${target}
        --export-height=${size}
        --export-width=${size}
        `
    .replace(/\n/g, " ")
    .replace(/[ ]+/g, " ")
    .trim();

  child_process.execSync(inkscapeCmd);
});

var gimpScript = fs.readFileSync(
  path.resolve(__dirname, "favicon.scm"),
  "utf8"
);
const gimpCmd = "gimp-console-2.10 -i -b -";
const gimpCmdOptions = {
  cwd: path.resolve(__dirname, ".."),
  input: gimpScript
};

child_process.execSync(gimpCmd, gimpCmdOptions);
