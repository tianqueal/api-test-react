import { User } from './entities/User.entity.js';

const findAll = async () => await User.findAll();

const findOneById = async (id) => await User.findOne({ where: { id } });

const findOneByEmail = async (email) =>
  await User.findOne({ where: { email } });

const create = async (user) => await User.create(user);

/* const addPostToUser = (userId, postId) => {
  users.map((user) => {
    if (user.id === userId) user.posts.push(postId);
  });
}; */

export const userRepository = {
  findAll,
  findOneById,
  create,
  findOneByEmail,
};
