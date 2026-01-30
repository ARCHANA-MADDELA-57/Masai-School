const express = require('express');
const supabase = require('./db');
const app = express();

app.use(express.json());

// --- 1. USER SIGNUP ---
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: "Missing fields" });

    const { data, error } = await supabase
        .from('users')
        .insert([{ name, email, password }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
});

// --- 2. TODO CRUD OPERATIONS ---

// Create Todo
app.post('/add-todo', async (req, res) => {
    const { title, description, userId } = req.body;
    if (!title || !userId) return res.status(400).json({ error: "Title and userId are required" });

    const { data, error } = await supabase
        .from('todos')
        .insert([{ title, description, user_id: userId }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
});

// Get User's Todos
app.get('/get-my-todo/:userId', async (req, res) => {
    const { userId } = req.params;
    const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', userId);

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
});

// Update Todo
app.put('/update-todo/:todoId', async (req, res) => {
    const { todoId } = req.params;
    const { title, description, is_completed } = req.body;

    const { data, error } = await supabase
        .from('todos')
        .update({ title, description, is_completed })
        .eq('id', todoId)
        .select();

    if (error || data.length === 0) return res.status(404).json({ error: "Todo not found or update failed" });
    res.json(data[0]);
});

// Delete Todo
app.delete('/delete-todo/:todoId', async (req, res) => {
    const { todoId } = req.params;
    const { error } = await supabase.from('todos').delete().eq('id', todoId);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Todo deleted successfully" });
});

// --- 3. CASCADE DELETE TEST ---
// Deleting a user will trigger the SQL "ON DELETE CASCADE" automatically
app.delete('/delete-user/:userId', async (req, res) => {
    const { userId } = req.params;
    const { error } = await supabase.from('users').delete().eq('id', userId);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "User and all their todos deleted." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));