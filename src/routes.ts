import express, { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

router.post("/users", new CreateUserController().handle as any)
router.post("/session", new AuthUserController().handle as any)

export { router }