const express = require('express');
const logger = require('./middlewares/logger');
const analyticsController=require('./controllers/analyticsController')
const rateLimiter = require('./middlewares/rateLimiter');
const app = express();

app.use(express.json());
app.use(logger); 

// Routes
app.use('/users',require('./routes/user.routes'));
app.use('/vehicles', require('./routes/vehicle.routes'));
app.use('/trips', require('./routes/trip.routes'));
app.get('/analytics', analyticsController.getAnalytics);


app.use((req, res) => {
    res.status(404).send("This Request Is Not Found");
});

app.listen(process.env.PORT, () => console.log(`Server live on port ${process.env.PORT}`));