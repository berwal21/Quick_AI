import express from "express";
import {
  getPublishCreations,
  getUserCreations,
  toggleLikeCreation,
} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const userrouter = express.Router();

userrouter.get("/get-user-creations", auth, getUserCreations);
userrouter.get("/get-published-creations", auth, getPublishCreations);
userrouter.get("/toogle-like-creations", auth, toggleLikeCreation);

export default userrouter;
