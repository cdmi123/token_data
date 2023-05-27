var user = require('../model/usermodel');
var jwt = require('jsonwebtoken');

exports.check_token = async (req,res,next) => {

    jwt.verify(req.headers.authorization, 'demo' , next);

}

exports.register = async (req,res) => {

   var data = await user.create(req.body);

    var token = jwt.sign({id:data.id , exp: Math.floor(Date.now() / 1000) - 30},'demo');

    res.status(200).json({
        status:"success",
        token
    })
}

exports.get_data = async (req,res) => {

    var data = await user.find();

    res.status(200).json({
        status:"success",
        data
    })
}