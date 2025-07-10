const express = require('express')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel.js');

const saltRounds = 10;


const signup = async (req, res) => {

    try {
        const { firstName, lastName, email, mobile, password } = req.body;
        const user = await userModel.verifyUser(mobile);

        if (!firstName || !lastName || !email || !mobile || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        else if (user) {
            return res.status(409).json({ message: "User already exists. Try signing in instead." });
        }
        else {
            const hashedpassword = await bcrypt.hash(password, saltRounds);
            const fullName = firstName + ' ' + lastName;

            await userModel.createUser(fullName, email, mobile, hashedpassword);
            return res.status(201).json({ message: "User Created Successfully" });
        }
    }
    catch (e) {
        console.log("Error in signup");
        return res.status(500).json({ message: "Server Error" })
    }
}

const signin = async (req, res) => {
    try {
        const { mobile, password } = req.body;

        if (!mobile || !password) {
            return res.status(400).json({ message: "All Fields are required" })
        }

        const user = await userModel.verifyUser(mobile);

        if (!user) {
            return res.status(404).json({ message: "Hmm, we couldn't find your account. Want to sign up?" });
        }

        const isMatching = await bcrypt.compare(password, user.password);

        if (isMatching) {
            res.status(200).json({ message: `Welcome back ${user.name}!!` })
        }
        else {
            res.status(401).json({ message: "Incorrect Credentials" });
        }
    }
    catch (e) {
        console.log("Error in signin: ", e.message);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = { signin, signup }