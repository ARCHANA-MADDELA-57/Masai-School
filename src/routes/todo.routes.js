const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const authMiddleware = require('../middleware/auth.middleware');

router.use(authMiddleware); // Protect all routes in this file

// Create Todo
router.post('/', async (req, res) => {
    const { title } = req.body;
    const { userId } = req.user; // From JWT

    const { data, error } = await supabase
        .from('todos')
        .insert([{ title, userId, completed: false }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data[0]);
});

// Get Todos (Only for logged-in user)
router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('userId', req.user.userId);

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
});

// Update Todo
router.put('/:id', async (req, res) => {
    const { title, completed } = req.body;
    const { data, error } = await supabase
        .from('todos')
        .update({ title, completed })
        .eq('id', req.params.id)
        .eq('userId', req.user.userId) // Ensure ownership
        .select();

    if (error || data.length === 0) return res.status(404).json({ error: "Todo not found or unauthorized" });
    res.json(data[0]);
});

// Delete Todo
router.delete('/:id', async (req, res) => {
    const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', req.params.id)
        .eq('userId', req.user.userId); // Ensure ownership

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Todo deleted successfully" });
});

module.exports = router;