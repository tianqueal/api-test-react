import { Post } from './entities/Post.entity.js';

const findAll = async () => await Post.findAll();

const findOneById = async (id) => await Post.findOne({ where: { id } });

const findUserPosts = async (userId) =>
  await Post.findAll({ where: { userId } });

const create = async (post) => await Post.create(post);

const update = async (id, post) => await Post.update(post, { where: { id } });

const deletePost = async (id) => await Post.destroy({ where: { id } });

export const postRepository = {
  findAll,
  findOneById,
  create,
  findUserPosts,
  update,
  deletePost,
};
