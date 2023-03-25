const LinkedListModel = require("../model/linkedListModel")

//add Donor--signup

module.exports.addDonor = function (req, res) {
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let bloodType = req.body.bloodType;
    let contactNo = req.body.contactNo

    let donor = new LinkedListModel({
        "userName": userName,
        "email": email,
        "password": password,
        "bloodType": bloodType,
        "contactNo": contactNo
    })

    donor.save(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Added!!"
            })
        }

    })
}

//get Donors--display

module.exports.getAllDonors = function (req, res) {
    LinkedListModel.find().exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donors Retrived!!"
            })
        }
    })
}

//get Donor by id

module.exports.getDonorById = function (req, res) {
    let id = req.params.id;
    LinkedListModel.findById(id).exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Retrived!!"
            })
        }
    })
}

//update Donor

module.exports.updateDonor = function (req, res) {
    let id = req.params.id;
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let bloodType = req.body.bloodType;
    let contactNo = req.body.contactNo

    LinkedListModel.findByIdAndUpdate(id, {
        "userName": userName,
        "email": email,
        "password": password,
        "bloodType": bloodType,
        "contactNo": contactNo
    }).exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Updated!!"
            })
        }
    })
}

//delete Donor

module.exports.deleteDonor = function (req, res) {

    let id = req.params.id;
    LinkedListModel.findByIdAndDelete(id).exec(function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Something went Wrong...."
            })
        }
        else {
            res.json({
                "status": 200,
                "data": data,
                "msg": "Donor Deleted!!"
            })
        }
    })
}


