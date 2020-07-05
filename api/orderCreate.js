
// var User = require("../model/userSchema");
// var Index =require('../model/indexSchema')
var Order = require('../model/orderSchema')
require('../mongoose')

module.exports = {
  OrderCreate: async (req, res) => {
    console.log("-----------orderCreate Cheack-------------")

    var orderId = req.body.orderId;
    var IdentityNumber = req.body.IdentityNumber;
    var subtotal = req.body.subtotal;

    var newUpdate = await Order.create({ orderId: orderId, IdentityNumber: IdentityNumber, subtotal: subtotal, date: Date.now() })
    // console.log("newUpdate", newUpdate)

    if (newUpdate != null && newUpdate != undefined) {
      res.status(200).send({ success: true, message: 'Ok', result: newUpdate });

    } else {
      res.status(400).send({ success: false, message: 'Unable to insert' })
    }

  }

}
