const home = async (req, res) => {
    try {
        res.status(200).send("welcome to home page");
    } catch (error) {
        console.log(error)
    }
}
const register = async (req, res) => {
    try {
        console.log(req.body)
        // res.status(200).send("welcome to register page");
        res.status(200).json({ message: req.body });
    } catch (error) {
        req.status(500).json("interval server error");
        console.log(error);
    }
}

module.exports = { home, register };