const MongoClient=require('mongodb').MongoClient;
/*
const client= new MongoClient("mongodb+srv://chinmoy:mwa@mwa-xdjlp.mongodb.net/test?retryWrites=true");

client.connect(function(err){
    const db=client.db("restaurant");
    const collection=db.collection("location");

    collection.find({},function(err,doc){
        console.dir("doc");
        client.close();
    })
    console.dir("done");
})
*/


const uri = "mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01";
const client= new MongoClient(uri);
const simpleEncryptor = require('simple-encryptor');
client.connect(function(err){
    const db=client.db("homework01");
    const collection=db.collection("data");

    collection.findOne({},{projection: {key:true,message:true, _id: false}},function(err,doc){
        console.dir(doc);
        const encryptor = simpleEncryptor(doc.key);
        const msg = encryptor.decrypt(doc.message);
        console.dir(msg);
        client.close();
    })
    console.dir("done");
})