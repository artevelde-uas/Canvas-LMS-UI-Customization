const http = require('http');
const fs = require('fs');
const path = require('path');

const package = require('../package.json');
const port = package?.config?.server?.port || 5000;
const serveFile = package?.config?.server?.file || 'desktop.dev.js';


// Concatenate the CSS warning files and output to 'dist' folder
{
    const hideWarningsStyles = (
        fs.readFileSync(path.join(__dirname, '/hide-theme-editor-warning.css'), 'utf8') + '\n' +
        fs.readFileSync(path.join(__dirname, '/hide-test-env-warning.css'), 'utf8')
    );

    fs.writeFileSync(path.join(__dirname, '/../dist/hide-warnings.css'), hideWarningsStyles);
}

// Replace URL inside the server file and output to 'dist' folder
{
    let serveLocalScript = fs.readFileSync(path.join(__dirname, '/serve-local.js.dist'), 'utf8');

    serveLocalScript = serveLocalScript.replace(/{{URL}}/, `http://127.0.0.1:${port}`)

    fs.writeFileSync(path.join(__dirname, '/../dist/serve-local.js'), serveLocalScript);
}

// Create an instance of the http server to handle HTTP requests
const server = http.createServer((request, response) => {
    const filePath = path.join(__dirname, '/../dist/', serveFile);
    const stat = fs.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'application/javascript',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(response);
});

// Start the server on port 3000
server.listen(port, '127.0.0.1');

console.log(`Serving '/dist/${serveFile}' on 'http://127.0.0.1:${port}'`);
