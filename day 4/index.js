var http=require('http');
var server=http.createServer();
var fs=require('fs');
var path=require('path');

const url=require('url')
const querystring=require('querystring')


server.on('request',function(req,res){
    
    res.write(content);
            res.end();
    

   
    
   // console.log(str);
    //console.log(myurl.path);
}).listen(8080);

