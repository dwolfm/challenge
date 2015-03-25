var http = require('http');

var tag = '<p id="awesome-index"> repaceme </p>'

var server = http.createServer( function (req, res) {
    if (req.method == 'GET'){
        res.write(tag);
    }
});

server.listen(8080);
