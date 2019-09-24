const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// définition du schema qui definit le user
const userSchema = Schema({
    email: String,
    name: String,
    password: String,
})
// enregistrement du model user
const User = mongoose.model('User', userSchema);

module.exports=User;