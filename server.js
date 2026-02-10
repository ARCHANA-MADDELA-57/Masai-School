require("dotenv").config();
const express = require("express");
const cors = require("cors");

const dbConnectionCheck = require("./src/utils/dbHealthCheck");
const AuthRoutes = require("./src/routes/auth.route");
const TaskRoutes = require("./src/routes/tasks.route")

const app = express();
const PORT = 5858

app.use(cors());
app.use(express.json());



app.use("/api", AuthRoutes);
app.use("/task", TaskRoutes)

app.listen(PORT, async () => {
    try {
        await dbConnectionCheck();
        console.log(`Server listening on port ${PORT}`);
    } catch (error) {
        console.log("Error occurred while starting server.");
    }
});
