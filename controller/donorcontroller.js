const donorModel = require("../model/donorModel")

//add Donor--signup
module.exports.addDonor = function (req, res) {
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let bloodType = req.body.bloodType;
    let contactNo = req.body.contactNo

    let donor = new donorModel({
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
    donorModel.find().exec(function (err, data) {
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


//update Donor
module.exports.updateDonor = function (req, res) {
    let donorId = req.body.donorId
    let userName = req.body.userName
    let email = req.body.email
    let bloodType = req.body.bloodType
    let contactNo = req.body.contactNo

    donorModel.updateOne({ _id: donorId }, {
        userName: userName, email: email,
        bloodType: bloodType, contactNo: contactNo
    }, function (err, data) {
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

//deleteDonor
module.exports.deletedonor = function (req, res) {
    let donorId = req.params.donorId
    donorModel.deleteOne({ _id: donorId }, function (err, data) {
        if (err) {
            console.log(err)
            res.json({
                "status": -1,
                "data": err,
                "msg": "Somethong went Wrong...."
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