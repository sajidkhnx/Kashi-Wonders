const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type: String},
    age :{type: Number},
    mobile : {type: String},
    email: {type: String, unique:true},
    username: { type: String, unique: true },
    password: String,
});

module.exports = mongoose.model('User', userSchema);
