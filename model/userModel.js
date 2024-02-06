const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    number:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
})
// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;