const validator = require('validator');

const validateUser = (req, res, next) => {
    const { name, email, password, age } = req.body;
    const errors = [];

    // Name Validation
    if (!name || name.trim().length === 0) errors.push("Name is required.");

    // Email Validation
    if (!email || !validator.isEmail(email)) errors.push("A valid email is required.");

    // Password Validation (min 8 chars)
    if (!password || password.length < 8) errors.push("Password must be at least 8 characters long.");

    // Age Validation (Optional, but must be >= 18 if provided)
    if (age !== undefined) {
        if (typeof age !== 'number' || age < 18) {
            errors.push("Age must be a number and at least 18.");
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next(); // Move to the next function (the controller)
};

module.exports = { validateUser };