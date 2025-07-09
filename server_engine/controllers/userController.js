const express = require('express')
const userModel = require('../models/userModel.js');

const signup = async (req, res) => {

    try {
        const { firstName, lastName, email, mobile, password, confirmPassword } = req.body;

        if (!firstName || !lastName || !email || !mobile || !password) {
            res.status(400).json({ message: 'All fields are required' })
        }
        else {
            const fullName = firstName + ' ' + lastName;
            await userModel.createUser(fullName, email, mobile, password);
            res.status(201).json({ message: "User Created Successfully" });
        }
    }
    catch (e) {
        console.log("Error in signup");
        res.status(500).json({ message: "Server Error" })
    }
}

const signin = async (req, res) => {
    try {
        const { mobile, password } = req.body;

        if (!mobile || !password) {
            return res.status(400).json({ message: "All Fields are required" })
        }

        const response = await userModel.verifyUser(mobile, password);
        if (response.success == true) {
            res.status(200).json({ message: response.message })
        }
        else {
            res.status(401).json({ message: response.message });
        }
    }
    catch (e) {
        console.log("Error in signin: ", e.message);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = { signin, signup }