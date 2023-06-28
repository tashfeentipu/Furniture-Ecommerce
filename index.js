const { exec } = require('child_process');


exec('npm start', { cwd: './home' });
exec('npm start', { cwd: './container' });


console.log("Services are Up and Running");