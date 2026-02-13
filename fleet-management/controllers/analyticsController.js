const supabase = require('../config/supabase');

exports.getAnalytics = async (req, res) => {
    const results = await Promise.all([
        supabase.from('users').select('*', { count: 'exact', head: true }).eq('role', 'customer'),
        supabase.from('users').select('*', { count: 'exact', head: true }).eq('role', 'owner'),
        supabase.from('users').select('*', { count: 'exact', head: true }).eq('role', 'driver'),
        supabase.from('vehicles').select('*', { count: 'exact', head: true }),
        supabase.from('trips').select('*', { count: 'exact', head: true })
    ]);

    res.json({
        total_customers: results[0].count,
        total_owners: results[1].count,
        total_drivers: results[2].count,
        total_vehicles: results[3].count,
        total_trips: results[4].count
    });
};