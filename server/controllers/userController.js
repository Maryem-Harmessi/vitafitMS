const { User } = require("../models/userModel");

const createUser = async (req, res) => {
    try {
        console.log(req.body);

        const { email, password, firstName, lastName, role, phoneNumber } =
            req.body;

        const newUser = new User({
            email,
            password,
            firstName,
            lastName,
            role,
            phoneNumber,
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User created successfully!",
            user: savedUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating user" });
    }
};

module.exports = { createUser };
