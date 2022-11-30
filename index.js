const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function validPassword() {
    let validCount = 0;
    const fileContents = fs.readFileSync('test.txt', 'utf-8');
    fileContents.split(/\r?\n/).forEach(line => {
        console.log('line from ' + line)

        let splitedLine = line.split(" ")
        let symbol = splitedLine[0]
        let min = splitedLine[1].split("-")[0]
        let max = splitedLine[1].split("-")[1].split(":")[0]
        let password = splitedLine[2]
        if (password.split(symbol).length - 1 >= min && password.split(symbol).length - 1 <= max) validCount++
    })
    console.log(validCount);
    return validCount;
}

validPassword();