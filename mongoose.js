var mongoose = require('mongoose');
mongoose.Promise =  global.Promise;

mongoose.connect('mongodb://localhost:27017/UserData',{ useNewUrlParser: true },(err,db) => {
    if(err)
        console.log('Database Connection Failed',err);
    else
        console.log('Successfully Connected To USER DATABASE');

});

module.exports = {mongoose};