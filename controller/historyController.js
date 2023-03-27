const historyModel = require("../model/historyModel")

//add Donor--signup
module.exports.addDonor = function (req, res) {
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let bloodType = req.body.bloodType;
    let contactNo = req.body.contactNo;
    let date = req.body.date

    let donor = new historyModel({
        "userName": userName,
        "email": email,
        "password": password,
        "bloodType": bloodType,
        "contactNo": contactNo,
        "date": date
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
    historyModel.find().exec(function (err, data) {
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

