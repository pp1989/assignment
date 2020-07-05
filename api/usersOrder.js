
// var User = require("../model/userSchema");
// var Index =require('../model/indexSchema');
var Order = require('../model/orderSchema')
require('../mongoose');
var mongoose = require('mongoose')

module.exports = {
    UsersOrder: async (req, res) => {
        
        console.log("---------Checak UserOrder--------")

        try {
            var orderId = req.body.orderId;
            var subtotal = req.body.subtotal;
            var newUpdate = await Order.create({ orderId: orderId, IdentityNumber: mongoose.Types.ObjectId(), subtotal: subtotal, date: Date.now() })
            // console.log("newUpdate", newUpdate)

            if (newUpdate != null && newUpdate != undefined) {
                res.status(200).send({ success: true, message: 'Ok', result: newUpdate });

            } else {
                res.status(400).send({ success: false, message: 'Unable to insert' })
            }
        }
        catch (error) {
            console.error(error);
            res.status(400).send({ success: false, message: 'Request error found' })
        }


    }

}
