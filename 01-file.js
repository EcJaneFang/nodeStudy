const fs = require("fs")
fs.readFile("./data/01-data.json", "utf-8", (err, data) => {
    if (err) {
        console.log("失败了");
        console.log(err);

    } else {
        console.log("成功了");
        let list = JSON.parse(data)

        list.map(res => {
            console.log(`id:${res.id}`);
        })

    }

})