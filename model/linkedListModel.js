const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    next: {
        type: Schema.Types.ObjectId,
        ref: 'Node'
    }
});

const LinkedListSchema = new Schema({
    head: {
        type: Schema.Types.ObjectId,
        ref: 'Node'
    }
});

module.exports = mongoose.model('LinkedList', LinkedListSchema);
