var express = require('express');
var axios = require('axios');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const url = 'https://randomuser.me/api/?results=10'

  async function go() {
    try {
    
      const users = await axios(url);
      res.set('Cache-Control', 'private, max-age=86400');
      res.set({ 'Link':[url+"&page1 ; rel=\"first\""]});


      res.send(users.data)
  
    } catch (e) {
      console.error(e); 
    }
  }
  
  go();

});



module.exports = router;
