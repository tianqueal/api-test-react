import { postRepository } from './repository.js';

const findAll = async () => {
  const posts = await postRepository.findAll();
  return { posts };
};

const findOneById = async (id) => {
  const post = await postRepository.findOneById(id);
  return { post };
};

const findUserPosts = async (userId) => {
  const userPosts = await postRepository.findUserPosts(userId);
  return { posts: userPosts };
};

const create = async (post) => {
  const newPost = await postRepository.create(post);
  return { post: newPost };
};

const update = async (id, post) => {
  const updatedPost = await postRepository.update(id, post);
  return { post: updatedPost };
};

const deletePost = async (id) => {
  await postRepository.deletePost(id);
  return;
};

export const postService = {
  findAll,
  findOneById,
  create,
  findUserPosts,
  update,
  deletePost,
};
