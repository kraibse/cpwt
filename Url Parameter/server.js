const http = require('http');
const url = require("url");
httpserver = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': `text/html`});
    res.write(url.parse(req.url,true).query.name);
    res.end();
}).listen(8080);