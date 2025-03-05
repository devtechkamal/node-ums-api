import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/userController";
const routes = express.Router();

// User
routes.get("/users", getUsers);
routes.get("/users/:id", getUserById);
routes.post("/users", createUser);
routes.put("/users/:id", updateUser);
routes.delete("/users/:id", deleteUser);

export default routes;
