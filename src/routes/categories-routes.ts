import {Router} from "express";
import * as CategoriesController from "../controllers/category-controller";

const router = Router({mergeParams: true});

router.get("/categories", CategoriesController.getAllCategories);
router.get("/categories/:id", CategoriesController.getSingleCategory);
router.post("/categories", CategoriesController.addCategory);
router.put("/categories/:id", CategoriesController.editCategory);
router.delete("/categories/:id", CategoriesController.deleteCategory);

export default router;
