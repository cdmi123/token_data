const mongoose = require('mongoose');

const user = new mongoose.Schema({
    
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String 
    }
});

const User = mongoose.model('user', user);

module.exports = User;