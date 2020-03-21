var express = require('express');
var router = express.Router();
const aunthController = require('../controllers/auth')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (req, res, next)=>{
  //signup
  //username uit request
  //password
  //bcrp
  //databank


});

module.exports = router;
