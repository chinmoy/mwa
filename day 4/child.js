const childops=()=>{
    const myurl=url.parse(req.url,true);
    //console.log(myurl.query.url);
        if(myurl.query.url!=undefined){
        var str=querystring.parse(myurl.query.url);
        str=Object.keys(str);
        str=str[0];
        //console.log(str);
    
        var content='';
        fs.readFile(path.join(__dirname,str),
        {encoding:'utf-8'},function(err,data){
            if(err)throw err;
            content=data;
           return content;
        })
    }
}

process.on('message',function(){
const resp=childops();
process.send(resp);
})