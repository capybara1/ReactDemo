const path = require('path');
const child_process = require('child_process');

const source = path.resolve(__dirname, `../public/logo_512.svg`);
const sizes = [512,256,192,144,128,96,72,64,48,32,16];

sizes.forEach(size => {
    const target = path.resolve(__dirname, `../public/icon-${size}-${size}.png`);

    const cmd = `
        inkscape -z ${source}
        --export-png=${target}
        --export-height=${size}
        --export-width=${size}
        `.replace(/\n/g, " ").replace(/[ ]+/g, " ").trim();

    child_process.exec(cmd, (err, stdout, stderr) => {
        const log = function (line, stream) {
            if (line.length > 0) {
                stream(line);
            }
        };
        log(stdout, console.log.bind(console));
        log(stderr, console.error.bind(console));
    });
});