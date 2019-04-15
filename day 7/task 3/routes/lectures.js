var express = require('express');
var bodyParser = require('body-parser')
const createError = require('http-errors');
const mongoClient = require ('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const client = new mongoClient('mongodb://localhost:27017')

var router = express.Router();



router.get('/', function(req, res, next) {
   
    client.connect(function(){
       

        client.db("homework07").collection("mylecture").find().toArray((err,data)=>{
            if (err) 
            {
              return next(err)
            }
            res.status(data.length==0?204:200).send(JSON.stringify(data));
        
    });
  });

});
  router.post('/',function(req, res, next) {
 
      //  res.status(201).send(JSON.stringify(obj));     
  });



  router.get('/:id',validID,function(req, res, next) {
    client.connect(function(){



    client.db("homework07").collection("mylecture").findOne({
        "_id":req.goodId
      }, (err,data)=>{
        if (err) 
        {
          return next(err)
        }
        if(!data) {
          return next(createError(404));
        }
        res.status(200).send(JSON.stringify(data));      
      });
    
    


    });


});


router.delete('/:id', validID,function(req, res, next) {

    client.connect(function(){



        client.db("homework07").collection("mylecture").deleteOne({
            "_id":req.goodId
          }, (err,data)=>{
            if (err) 
            {
              return next(err)
            }
            if(data.length === 0) {
              return next(createError(404));
            }
            res.status(200).send("OK");      
        });
        
        
    
    
        });
    

});





function validID(req, res, next){
	const id = req.params.id;
    if(ObjectId.isValid(id))
    {
        req.goodId =  new ObjectId(id);
        next();
    }
    else
    {
        return next(createError(404));

    }
	
}

  
  module.exports = router;