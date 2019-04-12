var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World!');
});

app.get('/new',function(req,res)
{
res.send('new page!');
});
var server=app.listen(3000,function() {});