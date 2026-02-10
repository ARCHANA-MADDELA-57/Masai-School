const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(400).send({
                status: false,
                message: "Token is missing"
            })
        };

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(400).send({
                status: false,
                message: "Token is missing"
            })
        };

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next()
    } catch (error) {
        console.log("Invalid token", error.message)
    }
};

module.exports = authenticate;