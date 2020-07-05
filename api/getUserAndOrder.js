var User = require("../model/userSchema");
var Order = require("../model/orderSchema");

// .............................USER API..............................

module.exports = {

    GetUserAndOrder: async (req, res) => {

        var getUser = await Order.aggregate([{
            $group: {
                _id: "$IdentityNumber",
                totalAmount: { $sum: "$subtotal" },
                noOfOrders: { $sum: 1 },
                average: { $avg: "$subtotal" },
            },
        },
        {
            $lookup: {
                from: "usercollections",
                localField: "_id",
                foreignField: "_id",
                as: "user",
            },
        },
        {
            $sort: { "user.userId": 1 },
        },
        ])
            .unwind("$user")
            .exec();

        if (getUser && getUser.length > 0) {
            getUser = getUser.map((data) => {
                return { userId: data.user.userId, name: data.user.name, noOfOrders: data.noOfOrders, averageBillValue: data.average };
            });
            res.status(200).send({ success: true, message: "Ok", result: getUser });
        } else {
            res.status(400).send({ success: false, message: "Unable to find your request", response: null });
        }
    },
};