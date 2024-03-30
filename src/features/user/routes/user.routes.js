import express from "express";
import { 
    loginUser,
    registerUser,
    getUser 
} from '../controller/user.contoller.js'
import jwtAuth from "../../../middlewares/jwt.middleware.js";

const userRoutes = express.Router();

userRoutes.route("/signup").post(registerUser);
userRoutes.route("/signin").post(loginUser);
userRoutes.route("/get").get(jwtAuth,getUser)

export default userRoutes;