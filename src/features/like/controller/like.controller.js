import { retrieveLikes, toggleStatus } from "../model/like.model.js";

import { customErrorHandler } from "../../../middlewares/errorHandler.middleware.js";

export const retrieveAllLikes = (req, res) => {
  const post_id = parseInt(req.params.postid);
  const likes = retrieveLikes(post_id);

  if(likes){
      res.status(200).json(likes);
  }else{
    throw new customErrorHandler(
        400,
        "Invalid Post Id !"
      );
  }
};

export const toggleLike = (req, res) => {
  const user_id = parseInt(req.userId);
  const post_id = parseInt(req.params.postid);

  const err = toggleStatus(user_id, post_id);
  if (err) {
    throw new customErrorHandler(
      400,
      "Can not Toggle Like!, Invalid Post Id !"
    );
  } else res.status(200).json({success:"true",msg:"Toggled Successfull"});
};
