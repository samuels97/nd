var http = require("http");
http.createServer(
function(req, res){
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end("Nodejs alive");
}).listen(8080, '127.0.0.1');
console.log("Server is running on port 8080");
