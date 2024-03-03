/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-var-requires */
const chokidar = require('chokidar');
const { exec } = require('child_process');

const watcher = chokidar.watch(['**/*.js', '**/*.ts', '!node_modules/**'], {
    ignored: /(^|[\/\\])\../,
    persistent: true
});

watcher.on('change', (path) => {
    exec(`npx prettier --write "${path}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return;
        }
        if (stderr) console.error(`stderr: ${stderr}`);
    });
});
