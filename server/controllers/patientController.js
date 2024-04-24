const { Patient } = require("../models/patientModel");

const createPatient = async (req, res) => {
    try {
        console.log(req.body);

        const {firstName, lastName, phoneNumber,dateOfBirth,address } =
            req.body;

        const newPatient = new Patient({
            firstName,
            lastName,
            phoneNumber,
            dateOfBirth,
            address
        });

        const savedPatient = await newPatient.save();

        res.status(201).json({
            message: "Patient created successfully!",
            patient: savedPatient,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating patient" });
    }
};

module.exports = { createPatient };