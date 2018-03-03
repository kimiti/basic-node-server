var http = require('http'),
    host = '127.0.0.1',
    port = '9000';

    var server = http.createServer(function(req, res){
        res.writeHead(200, {'content-Type' : 'text/html'});
        res.end('<h1>HELLO WORLD!</h1>');
    }).listen(port,host,function(){
        console.log('server running om http://' + host + ':' + port);
    });