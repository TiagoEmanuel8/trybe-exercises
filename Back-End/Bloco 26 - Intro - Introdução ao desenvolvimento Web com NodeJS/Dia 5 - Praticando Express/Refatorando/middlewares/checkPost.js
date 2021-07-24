const { posts } = require('../models/posts');
const checkPost = (req, res, next) => {
  const { id } = req.params;
  if(typeof id !== 'number') {
    return res.status(404).json({ message: "typeoff id is not a number" })
  };

  const myId = parseInt(req.params.id);
  const checkPost = posts.find(({ id }) => id === myId);
  if(!checkPost) {
    return res.status(404).json({ message: "id is not found" })
  }

  next();
}

module.exports = checkPost;