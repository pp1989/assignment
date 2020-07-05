var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
router.get('/getuserandorder', require("../api/getUserAndOrder").GetUserAndOrder);
router.post('/ordercreate', require("../api/orderCreate").OrderCreate);
router.post('/usersorders', require("../api/usersOrder").UsersOrder);
router.post('/usercreate', require("../api/userCreate").UserCreate);

module.exports = router;  
