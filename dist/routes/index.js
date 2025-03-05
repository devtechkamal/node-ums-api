"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const routes = express_1.default.Router();
// User
routes.get("/users", userController_1.getUsers);
routes.get("/users/:id", userController_1.getUserById);
routes.post("/users", userController_1.createUser);
routes.put("/users/:id", userController_1.updateUser);
routes.delete("/users/:id", userController_1.deleteUser);
exports.default = routes;
