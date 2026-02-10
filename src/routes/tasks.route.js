const express = require("express");
const { addTask, getTasks, updateTask, deleteTask } = require("../controllers/tasks.controller");
const authenticate = require("../middlewares/auth.middleware");
const authorizedRoles = require("../middlewares/role.middleware");

const _route = express.Router();

_route.post("/", authenticate, authorizedRoles("USER", "ADMIN"), addTask);

_route.get("/", authenticate, authorizedRoles("USER", "ADMIN"), getTasks);

_route.put("/:id", authenticate, authorizedRoles("USER", "ADMIN"), updateTask);

_route.delete("/", authenticate, authorizedRoles("USER", "ADMIN"), deleteTask);

module.exports = _route;