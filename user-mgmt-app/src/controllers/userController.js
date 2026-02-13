const bcrypt = require('bcrypt');
const supabase = require('../config/supabase');

exports.createUser = async (req, res) => {
    const { name, email, password, age } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const { data, error } = await supabase
        .from('users')
        .insert([{ name, email, password: hashedPassword, age }]);

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json({ message: "User created successfully!" });
};