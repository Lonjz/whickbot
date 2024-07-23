const mongoose = require('mongoose');

const data = mongoose.Schema({
    name: String,
    userID: String,
    money: Number,
    bank: Number,
    passive: String,
    trophies: Number,
    xp: Number,
    color: String,
});

module.exports = mongoose.model("Data", data);

//lonwastaken - dblon123