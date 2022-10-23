const fs = require("fs")
const data = fs.readFileSync("./data/01-data.json", "utf-8")
const list = JSON.parse(data)

//定义一个函数  用来 删除数组的元素
function dele(id) {
    const index = list.findIndex(item => item.id === id)
    list.splice(index, 1)

    fs.writeFileSync("./data/01-data.json", JSON.stringify(list))
}
dele(3)