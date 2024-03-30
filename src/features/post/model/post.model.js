const posts = [];
const bookMarks = []
let id = 0;

class Post {
    constructor(userId, caption, imageUrl) {
        this.id = ++id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }
};

// Retrieve all posts
export const getAll = () => {
    return posts;
}

// ----- Retrieve book mark posts -----
export const getBookmarks = () => {
    return bookMarks;
}

// Retrieve a specific post by ID
export const getById = (postId) => {
    return posts.find(post => post.id === postId);
}

// Retrieve post based on user credentials
export const getAllFromCredentials = (user_id) => {
    return posts.find(post => post.userId === user_id);
}

// Create a new post
export const create = (userId, caption, imageUrl) => {
    const newPost = new Post(userId, caption, imageUrl);
    // Assuming posts are stored in an array
    posts.push(newPost);
    return newPost;
}

// Delete a specific post by ID
export const deleteById = (user_id,postId) => {
    const index = posts.findIndex(post => post.id === postId && post.userId === user_id);
    let post;
    if (index !== -1) {
        post = posts[index]
        posts.splice(index, 1);

    } 
    return post
}

// Update a specific post by ID
export const update = (user_id, postId, updatedPostData) => {
    const index = posts.findIndex(post => post.id === postId && post.userId === user_id);
    const {caption,imageURL} = updatedPostData
    if (index !== -1) {
        posts[index].caption = caption;
        posts[index].imageUrl = imageURL;
        return posts[index];
    } 
}

create(1,"This is first post","a.jpg")
create(2,"This is second post","b.jpg")


