// console.log(__dirname);

// setTimeout(() => {
//     console.log("张宇");
// }, 1000);

const fs = require('fs')
const path = require('path')
let FullPath = path.join(__dirname, 'data', '01.text')
try {
    let ss = fs.readFileSync(FullPath, 'utf-8')
    console.log(ss);
} catch {
    console.log(err);
}

// console.log(__dirname);

// setTimeout(() => {
//     console.log("张宇");
// }, 1000);
