const supabase = require('../../supabaseClient');


exports.addOrder = async (req, res) => {
    const { product_name, quantity, price, customerId } = req.body;
    const { data, error } = await supabase
        .from('orders')
        .insert([{ product_name, quantity, price, customerId }])
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
};


exports.getMyOrders = async (req, res) => {
    const { customerId } = req.params;
    const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('customerId', customerId);

    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json(data);
};


exports.updateOrder = async (req, res) => {
    const { orderId } = req.params;
    const updates = req.body; 

    const { data, error } = await supabase
        .from('orders')
        .update(updates)
        .eq('id', orderId)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json(data);
};


exports.deleteOrder = async (req, res) => {
    const { orderId } = req.params;
    const { error } = await supabase
        .from('orders')
        .delete()
        .eq('id', orderId);

    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json({ message: "Order deleted successfully" });
};




