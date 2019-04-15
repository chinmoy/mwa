var express = require('express');
var bodyParser = require('body-parser')
const createError = require('http-errors');
const mongoClient = require ('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const client = new mongoClient('mongodb://localhost:27017')

var router = express.Router() // don't forget the parent params!



router.post("/:q",function(req, res, next){
    client.connect(function(){


  client.db("homework07").collection("mylecture").find({
    lecture:{$regex:req.params.q}
  }).toArray((err,data)=>{
    if (err) 
    {
      return next(err)
    }
    
    res.status(data.length==0?204:200).send(JSON.stringify(data));      
  });

});


});

module.exports = router;