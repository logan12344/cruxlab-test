const fs = require('fs');

function validPassword() {
    let validCount = 0;
    const fileContents = fs.readFileSync('test.txt', 'utf-8');
    fileContents.split(/\r?\n/).forEach(line => {
        let splitedLine = line.split(" ")
        let passSymbol = splitedLine[0]
        let countLine = splitedLine[1].split("-")
        let minCount = countLine[0]
        let maxCount = countLine[1].split(":")[0]
        let password = splitedLine[2]
        if (password.split(passSymbol).length - 1 >= minCount && password.split(passSymbol).length - 1 <= maxCount) validCount++
    })
    console.log(validCount);
    return validCount;
}

validPassword();