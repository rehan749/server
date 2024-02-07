const User = require('../model/userModel');
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {
        res.status(200).send("welcome to home page");
    } catch (error) {
        console.log(error)
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, number, password } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ error: "Email already exists" });
        }
        //  Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const userCreated = await User.create({ name, email, number, password: hashedPassword });
        res.status(200).json({ success: true, data: userCreated });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = { home, register };