const mongoose = require("mongoose");
const { Schema } = mongoose;

const patientSchema = new Schema({
    phoneNumber: { type: String, unique: true, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    medicalConditions:[{type:String}],
    dateOfBirth: {type: String, require: true},
    address: {type:String, require:true},
    profession: String
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = { Patient };