const http = require("http")
const fs = require("fs")
const path = require("path")
const sever = http.createServer((request, ress) => {
    const httpUrl = request.url
    if (httpUrl === '/' || httpUrl === '/index.html') {
        let res = fs.readFileSync(path.join(__dirname, 'clock', 'index.html'))
        ress.end(res)

    } else if (httpUrl === '/clock.js') {
        let res = fs.readFileSync(path.join(__dirname, 'clock', 'clock.js'))
        ress.end(res)

    } else if (httpUrl === '/clock.css') {
        let res = fs.readFileSync(path.join(__dirname, 'clock', 'clock.css'))
        ress.end(res)

    } else {
        ress.end(`<h1>404 not Found</h1>`)
    }

})

sever.listen(8999, () => {
    console.log('服务器开启 端口号8999');
})