require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// --- PART 2: SIGNUP API ---
app.post('/signup', async (req, res) => {
    try {
        const { name, email, age, location, password } = req.body;

        // 1. Basic Validation
        if (!name || !email || !age || !location || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // 2. Hash Password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 3. Store in Supabase
        const { data, error } = await supabase
            .from('users')
            .insert([{ name, email, age, location, password: hashedPassword }]);

        if (error) {
            if (error.code === '23505') return res.status(400).json({ error: "Email already exists" });
            throw error;
        }

        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- PART 3: USER PROFILE API ---
app.get('/myprofile', async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) return res.status(400).json({ error: "Name parameter is required" });

        // Fetch user (Selecting specific columns to EXCLUDE password)
        const { data, error } = await supabase
            .from('users')
            .select('id, name, email, age, location')
            .eq('name', name)
            .single();

        if (error || !data) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));