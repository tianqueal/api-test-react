import express from 'express';
import { postController } from '../posts/controller.js';

const postRouter = express.Router();

postRouter.get('/', postController.findAll);
postRouter.get('/:id', postController.findOneById);
postRouter.post('/', postController.create);
postRouter.put('/:id', postController.update);
postRouter.delete('/:id', postController.deletePost);

export default postRouter;
