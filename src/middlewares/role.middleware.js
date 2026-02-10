const authorizedRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles || !allowedRoles.includes(req.user.role)) {
            return res.status(403).send({
                status: false,
                message: "Access Denied"
            })
        }
        next();
    }
}

module.exports = authorizedRoles;