import { 
    getAll,
    getBookmarks,
    getById,
    getAllFromCredentials,
    create,
    update,
    deleteById
} from "../model/post.model.js"

import { customErrorHandler } from "../../../middlewares/errorHandler.middleware.js";

// /api/posts


// GET /all: Retrieve all posts 
// (Implementing filter based on caption given in query parameters)
// (Implementing sorting of posts)

export const retrieveAllPosts = (req,res) => {
    let posts = getAll()
    const { caption, sort, page, limit } = req.query;

    // Filtering
    if (caption) {
        posts = posts.filter(post => post.caption.includes(caption));
    }

    // sorting
    if (sort === 'engagement') {
        posts.sort((a, b) => (b.userId) - (a.userId));
    } else if (sort === 'date') {
        posts.sort((a, b) => (b.id) - (a.id));
    }

    // Pagination
    if(page && limit){
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        posts = posts.slice(startIndex, endIndex);
    }

    res.status(200).json(posts)

}

// GET /:id: Retrieve a specific post by ID
export const retrievePostWithGivenId = (req,res) => {
    const id = parseInt(req.params.id);
    const post = getById(id)
    if(post){
        res.status(200).json({ status: "success", post });
    }
    else{
        throw new customErrorHandler(
            400,
            "Post not found!, Give Valid Post Id."
          );
    }
}

// GET /: Retrieve posts based on user credentials
export const retrievePostsBasedOnUser = (req,res) => {
    const id = parseInt(req.userId);
    const posts = getAllFromCredentials(id)
    res.status(200).json(posts);
}

// POST /: Create a new post (Image upload functionality included)
export const createNewPost = (req,res) => {
    const id = parseInt(req.userId);
    const {caption, imageUrl} = req.body

    const post = create(id,caption,imageUrl)
    res.status(201).json(post)
}

// DELETE /:id: Delete a specific post by ID
export const deletePostById = (req,res) => {
    const id = parseInt(req.userId);
    const post_id = parseInt(req.params.id);
    const post = deleteById(id,post_id)
    if(post){
        res.status(200).json({sucess:"true",post})
    }
    else{
        throw new customErrorHandler(
            400,
            "Can not Delete!, Invalid Post Id !"
          );
    }
}

// PUT /:id: Update a specific post by ID (Image upload functionality included)
export const updatePostById = (req,res) => {
    const id = parseInt(req.userId);
    const post_id = parseInt(req.params.id);
    const post = update(id,post_id,req.body)
    if(post){
        res.status(200).json({sucess:"true",post})
    }
    else{
        throw new customErrorHandler(
            400,
            "Can not Update!, Invalid Post Id !"
          );
    }
}

//------------Bookmark and Save in draft-------------
export const bookMarkPost = (req,res) => {
    const id = parseInt(req.userId);
    const post_id = parseInt(req.params.id);

    const posts = getAll()
    const post = posts.find(post => post.id === post_id && post.userId === id)

    if(!post){
        res.status(400).json('post id not found for given user !')
    }
    else{
        const bookMarks = getBookmarks()
        bookMarks.push(post)
        res.status(201).json({success:"True",msg:"Successfully Added in book marks"})
    }  
}

//------------UnBookmark and remove from draft-------------
export const unBookMarkPost = (req,res) => {
    const id = parseInt(req.userId);
    const post_id = parseInt(req.params.id);
    const bookMarks = getBookmarks()

    const postIndex = bookMarks.findIndex(post => post.id === post_id && post.userId === id)
    if(postIndex == -1){
        res.status(400).json('post id not found for given user !')
    }
    else{
        const bookMarks = getBookmarks()
        bookMarks.splice(postIndex,1)
        res.status(200).json({success:"True",msg:"Successfully Removed from book marks"})
    }

}