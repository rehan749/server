const User = require('../model/userModel');
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {
        res.status(200).send("welcome to home page");
    } catch (error) {
        console.log(error);
    }
}
//  user registration logic 
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, number, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ error: "Email already exists" });
        }
        //  Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const userCreated = await User.create({ name, email, number, password: hashedPassword });
        res.status(200).json({ success: true, data: userCreated});
        // res.status(200).json({ success: true, data: userCreated, token: await userCreated.genrateToken() });


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


// user login logic 

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credential" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (isPasswordValid) {
            return res.status(200).json({ message: "Login Successful" });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { home, register, login };