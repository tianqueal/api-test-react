import express from 'express';
import { authService } from '../auth/service.js';
import { userRepository } from '../users/repository.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error('El email y la contraseña (password) son obligatorios');
    }

    if (await userRepository.findOneByEmail(req.body.email)) {
      throw new Error('El email ya está en uso');
    }

    const newUser = await authService.register(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error('El email y la contraseña (password) son obligatorios');
    }
    const { email, password } = req.body;
    const { token } = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
