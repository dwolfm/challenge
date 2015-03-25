var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer( function (req, res) {
    if (req.method == 'GET'){
        var pathname = url.parse(req.url).pathname;
        console.log('req for da pathname ' + pathname);

        if (pathname == '/' ){
            fs.readFile( './index-b.html', function(err, data) {
                if (err) responce.writeHead(404);
                res.writeHead(200);
                res.write(data);
                res.end();
            });
        } else if (pathname == '/lodash.js') {
            fs.readFile ('./lodash.js', function(err, data){
                if (err) responce.writeHead(404);
                res.writeHead(200);
                res.write(data);
                res.end();
            });
        } else if (pathname == '/jquery.js') {
            fs.readFile('./jquery.js' ,function (err, data) {
                if (err) responce.writeHead(404);
                res.writeHead(200);
                res.write(data);
                res.end();
            });
        }
    }
});

server.listen(8080);
