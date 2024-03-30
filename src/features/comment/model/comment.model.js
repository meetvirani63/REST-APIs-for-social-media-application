import { getAll } from "../../post/model/post.model.js";

const comments = [];
let id = 0;

class Comment {
    constructor(userId, postId, content) {
        this.id = ++id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }
};

// Retrieve a specific post by ID
export const retrieveComments = (post_id) => {
    return comments.find(comment => comment.postId === post_id);
}

// add comment to a particular post
export const addComment = (user_id,post_id,content) => {
    const posts = getAll()

    const post = posts.find(post => post.id === post_id);
    if(post){
        const comment = new Comment(user_id,post_id,content)
        // post.comments.push(comment)
        comments.push(comment)
        return comment
    }
}

// delete comment by specific id
export const deleteComment = (user_id, comment_id) => {
    const index = comments.findIndex(comment => comment.id === comment_id && comment.userId === user_id);
    let comment;
    if (index !== -1) {
        comment = comments[index]
        comments.splice(index, 1);
    } 
    return comment

}

// Update a specific comment by ID
export const updateComment = (user_id, comment_id, content) => {
    const index = comments.findIndex(comment => comment.id === comment_id && comment.userId === user_id);
    let comment;
    if (index !== -1) {
        comment = comments[index]
        comment.content = content

        return comment
    } 
}

addComment(3,2,"This is first comment")
addComment(2,1,"This is second comment")
