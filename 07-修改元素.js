const fs = require("fs")
let data = fs.readFileSync("./data/01-data.json", "utf-8")
const list = JSON.parse(data)


function change(id, obj) {
    const index = list.findIndex(item => item.id === id)
    list[index] = { id, ...obj }
    //写数据
    fs.writeFileSync("./data/01-data.json", JSON.stringify(list))

}
change(2, { name: "张三", age: 22 })