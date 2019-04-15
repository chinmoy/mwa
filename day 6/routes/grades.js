var express = require('express');
var bodyParser = require('body-parser')
const createError = require('http-errors');

var router = express.Router();
var jsonParser = bodyParser.json()

let grades = [{id:"0",course:"cs500",grade:"50"}];
let counter_id = 0;

router.get('/', function(req, res, next) {
    res.status(grades.length===0?204:200).send(JSON.stringify(grades));
  });


  router.post('/',function(req, res, next) {
    let obj = {
id: ++counter_id,
course:req.body.course,
grade:req.body.grade

    }  
    grades.push(obj);
        res.status(201).send(JSON.stringify(obj));     
  });



  router.get('/:id', checkId, function(req, res, next) {
    res.status(200).send(JSON.stringify(grades[req.gId]));

});

router.delete('/:id', checkId, function(req, res, next) {
    delete grades[req.gId]
    res.status(200).send("Result = OK successful deletion");

});

  function checkId(req, res, next){

let check = false
    let id = req.params.id;
    
    for (let item of grades) {
        console.log(item.id)
        
if(item.id == id)
{
    console.log("helllllllllo")

    req.gId = id;
    check = true
    break;
}

        }
		
    
    if(check)
    {
        next()
    }

    
    else{
res.status(400).send("Errrrrror");      

	}
  }
  Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };
  module.exports = router;