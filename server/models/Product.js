const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    creationDate: {
        type:Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Product', ProductSchema)