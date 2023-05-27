var express = require('express');
var router = express.Router();

var { register, get_data , check_token} = require('../controller/usercontroller');

router.post('/',register);

router.get('/get_data' , get_data);


module.exports = router;
