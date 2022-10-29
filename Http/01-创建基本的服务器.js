const http = require('http')
const sever = http.createServer((request, responce) => {
    responce.statusCode == 200;
    responce.setHeader('Content-Type', 'text/html;charset=utf-8')
    responce.end('哈哈哈哈哈哈和')
})

sever.listen(8899, () => {
    console.log("服务器已经 开启");
})