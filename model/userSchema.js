var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({

    userId: {
        type: String,
        required:true,
        trim: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    noOfOrders: {
        type: Number,
        default: 0
    }


});

var User = mongoose.model('UserCollection', UserSchema);
module.exports =  User ;