const fs = require("fs")
fs.appendFile("./data/01.text", "开心", function (err) {
    if (err) {
        console.log("出错了");

    } else {
        console.log("成功");
    }
})
