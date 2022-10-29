// console.log(__dirname);

// setTimeout(() => {
//     console.log("张宇");
// }, 1000);

const fs = require('fs')
try {
    let ss = fs.readFileSync(__dirname + '\\data\\01.text', 'utf-8')
    console.log(ss);
} catch {
    console.log(err);
}

// console.log(__dirname);

// setTimeout(() => {
//     console.log("张宇");
// }, 1000);
