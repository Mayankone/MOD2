const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String,
    price: Number,
    stock: Number,
})

const MyItems = mongoose.model('MyItems', itemSchema);

module.exports = MyItems;