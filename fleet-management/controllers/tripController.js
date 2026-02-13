const supabase = require('../config/supabase');

exports.createTrip = async (req, res) => {
    try {
        const { customer_id, vehicle_id, passengers, distance_km } = req.body;
        const { data, error } = await supabase.from('trips').insert([{ customer_id, vehicle_id, passengers, distance_km }]).select();
        if (error) return res.status(400).json({ error: error.message });
        res.status(201).json(data);
    } catch (err) { res.status(500).json({ error: "Server Error" }); }
};

exports.getTrip = async (req, res) => {
    try {
        const { data, error } = await supabase.from('trips').select('*').eq('id', req.params.tripId).single();
        if (error) return res.status(404).json({ error: "Trip not found" });
        res.json(data);
    } catch (err) { res.status(500).json({ error: "Server Error" }); }
};

exports.updateTrip = async (req, res) => {
    const { data, error } = await supabase.from('trips').update(req.body).eq('id', req.params.tripId).select();
    res.json(data || error);
};

exports.deleteTrip = async (req, res) => {
    const { error } = await supabase.from('trips').delete().eq('id', req.params.tripId);
    res.json({ message: error ? error.message : "Deleted" });
};

exports.endTrip = async (req, res) => {
    const { tripId } = req.params;
    const { data: trip } = await supabase.from('trips').select(`*, vehicles(rate_per_km)`).eq('id', tripId).single();
    const cost = trip.distance_km * trip.vehicles.rate_per_km;
    await supabase.from('trips').update({ isCompleted: true, tripCost: cost }).eq('id', tripId);
    await supabase.from('vehicles').update({ isAvailable: true }).eq('id', trip.vehicle_id);
    res.json({ message: "Trip ended", cost });
};
