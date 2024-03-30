import express from "express";
import {
    retrieveAllPosts,
    retrievePostWithGivenId,
    retrievePostsBasedOnUser,
    createNewPost,
    deletePostById,
    updatePostById,
    bookMarkPost,
    unBookMarkPost
 } from '../controller/post.controller.js'

import upload from "../../../middlewares/fileUpload.middleware.js";

const postRoutes = express.Router();

// /api/posts

// GET /all: Retrieve all posts
postRoutes.route("/all").get(retrieveAllPosts)

// GET /:id: Retrieve a specific post by ID
postRoutes.route("/:id").get(retrievePostWithGivenId)

// GET /: Retrieve posts based on user credentials
postRoutes.route("/").get(retrievePostsBasedOnUser)

// POST /: Create a new post (Image upload functionality included)
postRoutes.route("/").post(upload.single('imageUrl'),createNewPost)

// • DELETE /:id: Delete a specific post by ID
postRoutes.route("/:id").delete(deletePostById)

// PUT /:id: Update a specific post by ID (Image upload functionality included)
postRoutes.route("/:id").put(updatePostById)

// -----------------Additional for Bookmark-------------------------
postRoutes.route("/:id/bookmark").post(bookMarkPost)
postRoutes.route("/:id/unbookmark").post(unBookMarkPost)

export default postRoutes;