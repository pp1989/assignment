var User = require("../model/userSchema");
var Order = require("../model/orderSchema");
// var Index =require('../model/indexSchema')
require("../mongoose");
// ;UsersOrder
var mongoose = require("mongoose");

module.exports = {
    userCreate: async (req, res) => {
        var recordUpdate = false;

        var getOrders = await Order.aggregate([{
            $group: {
                _id: "$IdentityNumber",
                noOfOrders: { $sum: 1 },
            },
        },]).exec();

        if (getOrders && getOrders.length > 0) {
            for (var i = 0; i < getOrders.length; i++) {
                // console.log(getOrders[i]);

                if (getOrders[i]._id != "undefined" && getOrders[i]._id) {
                    recordUpdate = true;
                    User.findByIdAndUpdate(getOrders[i]._id, {
                        $set: { noOfOrders: getOrders[i].noOfOrders },
                    }).exec();
                }
            }
        }

        if (recordUpdate) {
            res.status(200).send({ success: true, message: "Successfully updated" });
        } else {
            res.status(400).send({ success: false, message: "Nothing to Update!" });
        }
    },
};