var http=require('http');
var server=http.createServer();
var fs=require('fs');
var path=require('path');


server.on('request',function(req,res){
    fs.readFile(path.join(__dirname,'file.txt'),
    {encoding:'utf-8'},function(err,data){
        if(err)throw err;
        console.log(data.length);
    })
    res.write("Hello readfile!!");
    res.end();
}).listen(8080);

server.on('request',function(req,res){
    fs.readFileSync(path.join(__dirname,'file.txt'),
    {encoding:'utf-8'},function(err,data){
        if(err)throw err;
        console.log(data.length);
    })
    res.write("Hello Sync!!");
    res.end();
}).listen(8080);


server.on('request',function(req,res){
    var rs=fs.createReadStream(path.join(__dirname,'file.txt')).pipe(res);
    res.write("Hello Stream!!");
    res.end();
}).listen(8080);