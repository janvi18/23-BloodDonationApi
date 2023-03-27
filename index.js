const express = require("express")
const mongoose = require("mongoose")


const donorController = require("./Controller/donorcontroller")
const linkedListController = require("./Controller/linkedListController")
const sessionController = require("./controller/sessionController")
const historyController = require("./controller/historyController")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//donor Api
app.get("/donor", donorController.getAllDonors)
app.post("/donor", donorController.addDonor)
app.put("/donor", donorController.updateDonor)
app.delete("/donor/:donorId", donorController.deletedonor)

//linkedList Api
app.get("/linkedList", linkedListController.getAllDonors)
app.post("/linkedList", linkedListController.addDonor)
app.delete("/linkedList/:id", linkedListController.deleteDonor)

//session Api
app.get("/session", sessionController.getAllUsers)
app.post("/login", sessionController.login)

//history Api
app.get("/history", historyController.getAllDonors)
app.post("/history", historyController.addDonor)


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