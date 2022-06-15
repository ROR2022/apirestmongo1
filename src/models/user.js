const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String
    },
    title: {
        type: String
    },
    subtitle:{
        type: String
    },
    email: {
        type: String
    },
    category:{
        type: String
    }
});

module.exports = mongoose.model('comercio',userSchema);