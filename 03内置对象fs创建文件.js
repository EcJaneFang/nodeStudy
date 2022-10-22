const fs = require("fs")
let data = fs.writeFile("./data/02.json", "啦啦啦啦", err => {
    if (err) {
        console.log(err);

    }
})

