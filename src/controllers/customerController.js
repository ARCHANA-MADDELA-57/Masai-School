const supabase = require('../../supabaseClient');

exports.registerCustomer = async(req, res)=>{
    const {full_name, email, phone} = req.body;

    if(!full_name || !email || !phone){
        return res.status(400).json({error:"All fields are required"});
    }

    const { data, error } = await supabase
    .from('customers')
    .insert([{full_name,email,phone}])
    .select();

    if(error) return res.status(400).json({error:error.message});
    res.status(201).json(data);
};