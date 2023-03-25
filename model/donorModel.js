const mongoose=require("mongoose");

const donorSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password:String,
    bloodType: String,
    contactNo: String
});

module.exports=mongoose.model("Donor",donorSchema)