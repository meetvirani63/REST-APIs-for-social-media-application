import { getAll } from "../../post/model/post.model.js";

const likes = [];
let id = 0;

class Like {
    constructor(userId, postId) {
        this.id = ++id;
        this.userId = userId;
        this.postId = postId;
    }
};

// Retrieve a specific post by ID
export const retrieveLikes = (post_id) => {
    const posts = getAll()
    const post = posts.find(post => post.id === post_id)
    if(post) {
        return likes.find(like => like.postId === post_id);
    }
}

// add comment to a particular post
export const toggleStatus = (user_id,post_id) => {

    const posts = getAll()
    const post = posts.find(post => post.id === post_id)
    if(!post) return 'Invalid post Id !'
    const index = likes.findIndex(like => like.userId === user_id && like.postId === post_id);
    if(index == -1){
        const like1 = new Like(user_id,post_id)
        likes.push(like1)
    }
    else{
        likes.splice(index,1)
    }
}