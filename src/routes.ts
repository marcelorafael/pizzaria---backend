import express, { Router, Request, Response } from 'express'
import multer from 'multer';
import uploadConfig from "./config/multer"

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserControler';
import { CreateCategoryController } from './controllers/cetegory/CreateCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { ListCategoryController } from './controllers/cetegory/ListCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';

import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// ROUTES USER
router.post("/users", new CreateUserController().handle as any)
router.post("/session", new AuthUserController().handle as any)

router.get("/userDetail", isAuthenticated as any, new DetailUserController().handle as any)

// ROUTES CATEGORY
router.post("/category", isAuthenticated as any, new CreateCategoryController().handle as any)
router.get("/listCategory", isAuthenticated as any, new ListCategoryController().handle as any)

// ROUTES PRODUCTS
router.post("/product", isAuthenticated as any, upload.single("file"),new CreateProductController().handle as any)
router.get("/category/product", isAuthenticated as any, new ListByCategoryController().handle as any)

// ROUTES ORDER
router.post("/order", isAuthenticated as any, new CreateOrderController().handle as any);

export { router }