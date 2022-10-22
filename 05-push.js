let fs = require("fs")
let data = fs.readFileSync("./data/01-data.json", "utf-8")
let lis = JSON.parse(data)
// console.log(lis);
function itin(obj) {
    let id = parseInt(Math.random() * 10)

    lis.push({ id: id, ...obj })
    fs.writeFileSync("./data/01-data.json", JSON.stringify(lis))

}

letres = itin({ "name": "八戒" })