const fs = require("fs")
let data = fs.readFileSync("./data/01-data.json", "utf-8")

const list = JSON.parse(data)
// console.log(list);
let fun = (id) => {
    return list.find(item => item.id == id)

}
const res = fun(1)
console.log(res.name);