const supabase = require("../config/supabase.config");

const addTask = async (req, res) => {
    try {
        const { title, description } = req.body;


        if (!title || !description) {
            return res.status(400).send({
                status: false,
                message: "Title and Description fields are required."
            })
        };

        const payload = {
            user_id: req.user.id,
            title,
            description
        }

        const { data, error } = await supabase.from("tasks").insert(payload).select();

        if (error) throw error;

        res.status(201).send({
            status: true,
            message: "Task added successfully.",
            data
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

const getTasks = async (req, res) => {
    try {
        const { data, error } = await supabase.from("tasks").select().eq("user_id", req.user.id)

        if (error) throw error;

        res.status(200).send({
            status: true,
            message: "Tasks data fetched successfully",
            data
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const { data, error } = await supabase.from("tasks").update({ title, description }).eq("id", id).eq("user_id", req.user.id).select();

        if (error) throw error;

        res.status(200).send({
            status: true,
            message: "Task data updated successfully",
            data
        })


    } catch (error) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.body;

        const { error } = await supabase.from("tasks").delete().eq("id", id).eq("user_id", req.user.id);

        if (error) throw error;

        res.status(200).send({
            status: true,
            message: "Task data deleted successfully."
        })

    } catch (error) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

module.exports = {
    addTask,
    getTasks,
    updateTask,
    deleteTask
}