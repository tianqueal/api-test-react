import dotenv from 'dotenv';
dotenv.config();

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userRepository } from '../users/repository.js';

// eslint-disable-next-line no-undef
const SECRET_KEY = process.env.SECRET_KEY;

const register = async (userObj) => {
  const hashedPassword = await bcrypt.hash(userObj.password, 10);
  const newUser = await userRepository.create({
    ...userObj,
    password: hashedPassword,
  });
  return newUser;
};

const login = async (email, password) => {
  const user = await userRepository.findOneByEmail(email);
  if (!user) {
    throw new Error('Las credenciales son inválidas');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Las credenciales son inválidas');
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '24h' });
  return { token };
};

export const authService = {
  register,
  login,
};
