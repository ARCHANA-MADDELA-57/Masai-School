const supabase = require("../config/supabase.config")

const dbConnectionCheck = async () => {
    try {
        const {error} = await supabase.from("users").select().limit(1);

        if(error) {
            console.log("Data base connection failed");
            process.exit(1)
        }

        console.log("Data base connected successfully");
    } catch (error) {
        console.log("Error occured while connecting to the Data base.");
    }
};


module.exports = dbConnectionCheck