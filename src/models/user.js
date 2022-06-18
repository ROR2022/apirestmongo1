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
    local: {
        type: String
    },
    description:{
        type: String
    },
    category:{
        type: String
    },
    servicio:{
        type: String
    },
    diseno: {
        type: String
    }
});

module.exports = mongoose.model('comercio',userSchema);