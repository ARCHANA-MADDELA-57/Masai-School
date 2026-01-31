const supabase = require('../config/supabase');

exports.signUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Validation: Role must be one of the three allowed values
        const validRoles = ['customer', 'owner', 'driver'];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ error: "Invalid role. Must be customer, owner, or driver." });
        }

        const { data, error } = await supabase
            .from('users')
            .insert([{ name, email, password, role }]) // Storing raw password per evaluation rules
            .select();

        if (error) return res.status(400).json({ error: error.message });
        res.status(201).json({ message: "User created successfully", data });
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
};