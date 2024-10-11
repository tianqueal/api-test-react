import { userRepository } from './repository.js';
import { postService } from '../posts/service.js';

const findAll = async () => {
  const users = await userRepository.findAll();
  return { users };
};

const findOneById = async (id) => {
  const user = await userRepository.findOneById(id);
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

const findUserPosts = async (userId) => {
  const userPosts = await postService.findUserPosts(userId);
  return userPosts;
};

const create = async (userObj) => {
  const newUser = await userRepository.create(userObj);
  return {
    user: newUser,
  };
};

/* const addPostToUser = (userId, postId) => {
  userRepository.addPostToUser(userId, postId);
}; */

export const userService = {
  findAll,
  findOneById,
  create,
  findUserPosts,
};
