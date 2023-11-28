const http = require("http");

var routes = {
    '/': function(req, res){
        res.writeHead(200);
        res.end('Hello world');
    },
    '/foo': function(req, res){
        res.writeHead(200);
        res.end('You are now visiting "foo"');
    }
}

http.createServer(function(req, res){
    if(req.url in routes){
        return routes[req.url](req, res);
    }

    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(1337);
