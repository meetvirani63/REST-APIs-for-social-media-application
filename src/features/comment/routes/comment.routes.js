import express from "express";
import {
    retrieveAllComments,
    addNewComment,
    deleteCommentById,
    updateCommentById
 } from '../controller/comment.controller.js'

const commentRoutes = express.Router();


// api/comments

// GET /:id: Retrieve all comments for a specific post
commentRoutes.route("/:id").get(retrieveAllComments)

// POST /id: Add a new comment to a specific post
commentRoutes.route("/:id").post(addNewComment)

// DELETE /id: Delete a specific comment by ID
commentRoutes.route("/:id").delete(deleteCommentById)

// PUT/id: Update a specific comment by ID
commentRoutes.route("/:id").put(updateCommentById)

export default commentRoutes