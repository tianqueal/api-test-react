import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import meRouter from './routes/me.js';
import postRouter from './routes/posts.js';
import authRouter from './routes/auth.js';
import { sequelize } from './db/db.config.js';
import { User } from './users/entities/User.entity.js';
import { Post } from './posts/entities/Post.entity.js';
import { authenticateToken } from './middleware/auth.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hey world!');
});

app.use('/auth', authRouter);

// END POINT: me
app.use('/me', authenticateToken, meRouter);

// END POINT: posts
app.use('/posts', authenticateToken, postRouter);

try {
  User.hasMany(Post, {
    foreignKey: 'userId',
  });

  Post.belongsTo(User, {
    foreignKey: 'userId',
  });

  await sequelize.sync({ force: true });
  console.log('Connection with DB stablished');
} catch (error) {
  console.log('DB not connected', error);
}

export default app.listen(PORT | 3000, () => {
  console.log(`Server listening on port ${PORT}`);
});
