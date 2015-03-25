var fs = require('fs');
var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method == 'GET'){
        var pathname = url.parse(req.url).pathname;
        console.log(pathname);
        if (pathname == '/') {
            fs.readFile('./index.html', function(err, data){
                if (err) res.writeHead(404);
                res.write(data);
                res.end();
            });
        } else if (pathname == '/pizzacat.jpg') {
            fs.readFile('./pizzacat.jpg', function (err, data) {
                if (err) res.writeHead(404);
                res.write(data);
                res.end();
            });
        } else {
            res.writeHead(404);
            res.write('<h1> Error: page not found </h1>');
            res.end();
        }
    } 
});

server.listen(1234);
