const chokidar = require('chokidar');
const { exec } = require('child_process');

const watcher = chokidar.watch(['**/*.js', '**/*.ts', '!node_modules/**'], {
    ignored: /(^|[\/\\])\../,
    persistent: true,
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
