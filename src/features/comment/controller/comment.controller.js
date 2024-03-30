import{
    retrieveComments,
    addComment,
    deleteComment,
    updateComment
} from '../model/comment.model.js'

import { customErrorHandler } from '../../../middlewares/errorHandler.middleware.js'

export const retrieveAllComments = (req,res) => {
    const post_id = parseInt(req.params.id)
    const comments = retrieveComments(post_id)
    if(comments){
        res.status(200).json(comments)
    }
    else{
        throw new customErrorHandler(
            400,
            "Error retriving comments !"
          );
    }
}

export const addNewComment = (req,res) => {
    const user_id = parseInt(req.userId)
    const post_id = parseInt(req.params.id)
    const {content} = req.body
    const comment = addComment(user_id,post_id,content)
    if(comment){
        res.status(201).json({success:"true",comment})
    }else{
        throw new customErrorHandler(
            400,
            "Can not Add Comment!, Invalid Post Id !"
          );
    }
}

export const deleteCommentById = (req,res) => {
    const user_id = parseInt(req.userId)
    const comment_id = parseInt(req.params.id)
    const comment = deleteComment(user_id,comment_id)
    if(comment){
        res.status(200).json({success:"true",comment});
    }else{
        throw new customErrorHandler(
            400,
            "Can not Delete Comment !"
          );
    }
}

export const updateCommentById = (req,res) => {
    const user_id = parseInt(req.userId)
    const comment_id = parseInt(req.params.id)
    const {content} = req.body
    const comment = updateComment(user_id,comment_id,content)
    if(comment){
        res.status(200).json(comment)
    }else{
        throw new customErrorHandler(
            400,
            "Can not Update Comment!, Invalid Comment Id !"
          );
    }
}
