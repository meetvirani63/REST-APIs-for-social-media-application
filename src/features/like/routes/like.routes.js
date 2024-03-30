import express from "express";
import {
    retrieveAllLikes,
    toggleLike
 } from '../controller/like.controller.js'
import jwtAuth from "../../../middlewares/jwt.middleware.js";

const likeRoutes = express.Router();

// /api/likes

// GET /:postid: Retrieve all likes for a specific post
likeRoutes.route("/:postid").get(retrieveAllLikes)

// GET/toggle/:postid: Toggle like status for a specific post
likeRoutes.route("/toggle/:postid").get(jwtAuth,toggleLike)

export default likeRoutes