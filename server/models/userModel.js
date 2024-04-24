const mongoose = require('mongoose') ;
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {type:String,unique:true,require:true},
    password:{type:String,require:true},
    firstName: {type:String,require:true},
    lastName:{type:String,require:true},
    role:{type:String,require:true,enum:["Dietitian","Assistant"]},
    phoneNumber:String
})

const User = mongoose.model('User', userSchema);

module.exports = {User}

