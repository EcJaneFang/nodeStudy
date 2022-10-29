const fs = require('fs')
const path = require('path')
let FullPath = path.join(__dirname, 'data', '02-txt')

let data = fs.readFileSync(FullPath, 'utf-8')
// console.log(data);
let res = data.split(',')
let totleScore = res.map(v => {
    score = v.split('=')
    return score[1]
    // console.log(score);
})
// console.log(totleScore);
let totS = totleScore.reduce((sum, i) => {
    return sum += +i

}, 0)
// console.log(totS);
fs.writeFileSync(path.join(__dirname, 'data', '03.txt'), `总成绩是${totS}`)

