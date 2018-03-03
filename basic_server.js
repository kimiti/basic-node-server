var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    host = '127.0.0.1',
    port = '9000';
var mimes = {
    ".htm" : "text/html",
    ".css" : "text/css",
    ".js" : "text/javascript",
    ".gif" : "image/gif",
    ".jpg" : "image/jpeg",
    ".png" : "image/png"
}
    var server = http.createServer(function(req, res){
        var filepath = (req.url === './') ? ('./index.htm') : ('.' + req.url);
        var conentType = mimes[path.extname(filepath)];
        // cheack if the file exists
        fs.exists(filepath,function(file_exists){
            if(file_exists){
                //read and serve
                fs.readFile(filepath,function(error, content){
                    if(error){
                        res.writeHead(500);
                        res.end();
                    }else{
                        res.writeHead(200, {'content-Type' : conentType});
                        res.end(content,'utf-8');                    }
                })
            }else{
                res.writeHead(404);
                res.end('sorry we could not find the file you requested!');
            }
        });
    }).listen(port,host,function(){
        console.log('server running om http://' + host + ':' + port);
    });