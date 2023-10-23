const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String
    },
    mobile:{
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt:{
        type: Date
    }
});

const UsersModel = mongoose.model('UsersModel',userSchema);
module.exports = UsersModel;