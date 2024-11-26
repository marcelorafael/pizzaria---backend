import express, { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserControler';
import { CreateCategoryController } from './controllers/cetegory/CreateCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// ROUTES USER
router.post("/users", new CreateUserController().handle as any)
router.post("/session", new AuthUserController().handle as any)

router.get("/userDetail", isAuthenticated as any, new DetailUserController().handle as any)

// ROUTES CATEGORY
router.post("/category", isAuthenticated as any, new CreateCategoryController().handle as any)

export { router }