
var http = require('http');

const hostname = '127.0.0.1';
const port = '3310';


const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
});
//.listen(8080);

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});