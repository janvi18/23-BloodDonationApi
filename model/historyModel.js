const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    bloodType: String,
    contactNo: String,
    date: String,
});

module.exports = mongoose.model("History", historySchema)