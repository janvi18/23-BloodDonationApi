const express = require("express")
const mongoose = require("mongoose")
const donorController = require("./Controller/donorcontroller")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//donor Api
app.get("/donor", donorController.getAllDonors)
app.post("/donor", donorController.addDonor)
app.put("/donor", donorController.updateDonor)
app.delete("/donor/:donorId", donorController.deletedonor)

mongoose.connect("mongodb://localhost/bloodDonationApp", function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("db Connected!!")
    }
})

app.listen(9001, function (err) {
    if (err) {
        console.log(err)
        console.log("Something Went Wrong....")
    }
    else {
        console.log("Server Connected at port number 9001")
    }
})