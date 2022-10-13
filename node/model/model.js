var mongoose = require('mongoose')

var user = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    catid:String,
    prodid:Number,
    prodname:String,
    prodprice:String,
    catname:String
})

module.exports = mongoose.model('categories',user)