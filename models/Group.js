const mongoose = require("mongoose");

const GroupScheme = new mongoose.Schema({
    groupname: {
        type: String,
        required: [true, 'What is your groupname?'],
        lowercase: [true, 'Please use lowercase letters only.'],
        validate: {
            validator: function(v) {
              return /^[a-z0-9!@#$%^&*?]+$/.test(v);
            },
            message: props => `${props.value} is not a valid group name!`
        },
    },
    email: {
        type: String,
        required: [true, 'What is your email?'],
        validate: {
            validator: function(v) {
              return /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
          }
    },
    mobile: {
        type: Number
    },
    profile: {
        type: String
    },
    avatarimage: {
        type: String
    }
})

module.exports = mongoose.model('Group', GroupScheme);