var express = require('express');
var router = express.Router();
const rootpath=require('path').dirname(require.main.filename);
const modulepath= require('path').join(rootpath,'modules/secret');
/* GET home page. */
router.get('/', function(req, res, next) {
 
  console.log( " ",modulepath.msg);
  res.render('index', { title: 'Express' });
});

module.exports = router;
