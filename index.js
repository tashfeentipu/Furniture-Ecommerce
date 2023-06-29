const { exec } = require('child_process');
const { readdirSync } = require('fs')

const excludedDirectories = [".git", "auth", "cart", "checkout", "services", "shop"]

const getDirectories = readdirSync(__dirname, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !excludedDirectories.includes(dirent.name))
    .map(dirent => dirent.name)

for (dir of getDirectories) {
    exec('npm start', { cwd: `./${dir}` }, (err, stdout, stderr) => {
        if (err) {
            throw err
        }
    });
}