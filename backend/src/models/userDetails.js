const mongoose = require('../configurations/dbConfig');

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ["Student", "Instructor"], default: "Student" },

});
module.exports = mongoose.model("User", userschema);