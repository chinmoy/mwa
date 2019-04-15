var express = require('express');

var router = express.Router();
//built in middleware
const mongoClient = require ('mongodb').MongoClient;
//const client = new mongoClient('mongodb://localhost:27017')
const client = new mongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01')

/* GET users listing. */
router.get('/', function(req, res, next) {

    client.connect(function(){
        const db = client.db('homework01');
        const collection = db.collection('data')
        collection.findOne({},function(err,doc){
        console.dir(doc)
        client.close();
        
        })
        console.log("Done");
        res.send("ok")
        
        
          });

        
});




module.exports = router;
