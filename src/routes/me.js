import express from 'express';
import { userController } from '../users/controller.js';

const meRouter = express.Router();

meRouter.get('/', userController.findAuthenticatedUser);

export default meRouter;
