import express, { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserControler';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

router.post("/users", new CreateUserController().handle as any)
router.post("/session", new AuthUserController().handle as any)

router.get("/userDetail", isAuthenticated, new DetailUserController().handle as any)

export { router }