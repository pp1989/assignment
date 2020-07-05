var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate')
var OrderSchema = new mongoose.Schema({

    orderId: {
        type: String,
        trim: true
    },

    IdentityNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserCollection',
        required: true,

    },

    subtotal: {
        type: Number,
        required: true,
        trim: true
    },

    date: {
        type: Date, default: Date.now(),
        unique: true,
        required: true
    }


});

OrderSchema.plugin(mongoosePaginate);

var Order = mongoose.model('OrderCollection', OrderSchema);
module.exports = Order;