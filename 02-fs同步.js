const fs = require("fs")
let data = fs.readFileSync("./data/01-data.json", "utf-8");
let list = JSON.parse(data)
// console.log(list);
list.map(res => {
    console.log(res.id);
})
