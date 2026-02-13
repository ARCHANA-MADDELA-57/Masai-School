const requestCounts = {};
const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    if (!requestCounts[ip]) requestCounts[ip] = [];
    requestCounts[ip] = requestCounts[ip].filter(t => now - t < 60000);
    
    if (requestCounts[ip].length >= 3) {
        return res.status(429).json({ error: "Maximum 3 requests per minute per IP" });
    }
    requestCounts[ip].push(now);
    next();
};
module.exports = rateLimiter;