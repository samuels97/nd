const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('x');
}).listen(1337);
