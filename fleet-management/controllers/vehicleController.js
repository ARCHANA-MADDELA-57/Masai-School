const supabase = require('../config/supabase');

exports.createVehicle = async (req, res) => {
    try {
        const { name, registration_number, allowed_passengers, rate_per_km, owner_id } = req.body;
        
        const { data, error } = await supabase
            .from('vehicles')
            .insert([{ name, registration_number, allowed_passengers, rate_per_km, owner_id }])
            .select();

        if (error) return res.status(400).json({ error: error.message });
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
};

exports.assignDriver = async (req, res) => {
    const { vehicleId } = req.params;
    const { driver_id } = req.body;

    const { data, error } = await supabase
        .from('vehicles')
        .update({ driver_id })
        .eq('id', vehicleId)
        .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Driver assigned", data });
};

exports.getVehicle = async (req, res) => {
    const { data, error } = await supabase
        .from('vehicles')
        .select('*, users!owner_id(name)')
        .eq('id', req.params.vehicleId)
        .single();

    if (error) return res.status(404).json({ error: "Vehicle not found" });
    res.json(data);
};