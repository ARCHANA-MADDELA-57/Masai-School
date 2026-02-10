const supabase = require("../config/supabase.config");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send({
                status: false,
                message: "Name, email and Password fields are required."
            })
        }

        const { data: existing } = await supabase.from("users").select().eq("email", email).maybeSingle();

        if (existing) {
            return res.status(409).send({
                status: false,
                message: `User with the email ${email} already exists.`
            })
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        const payload = {
            name,
            email,
            password: hashedPassword,
            role: role ? role : 'USER'
        }

        const { data, error } = await supabase.from("users").insert([payload]).select("name, email, role");

        if (error) {
            throw error
        }

        return res.status(201).send({
            status: true,
            message: `User Created Successfully.`,
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
        });
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({
                status: false,
                message: "Email and Password fields are required."
            })
        }

        const { data: existing } = await supabase.from("users").select().eq("email", email).maybeSingle();

        if (!existing) {
            return res.status(404).send({
                status: false,
                message: `User not found.`
            })
        };

        const isMatch = await bcrypt.compare(password, existing.password);

        if (!isMatch) {
            return res.status(400).send({
                status: false,
                message: `Invalid Credentials.`
            })
        }

        const token = jwt.sign(
            {
                id: existing.id,
                role: existing.role,
                email: existing.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            status: true,
            message: "User logged in successfully",
            data: {
                name: existing.name,
                email: existing.email,
                role: existing.role,
                token,
            },
        });
    } catch (error) {

        return res.status(500).json({
            status: false,
            message: error.message,
        });
    }
}


module.exports = { signup, login }