import express, { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

router.post("/users", new CreateUserController().handle as any)

export { router }