import {Router} from "express";

import * as CardController from "../controllers/card-controller";
import multer from "../utils/multer";

const router = Router();

router.get("/cards", CardController.getAllCards);
router.get("/cards/:id", CardController.getSingleCard);
router.get("/cards/category/:id", CardController.getCardsByCategory);

router.post("/cards", CardController.addCard);
router.post("/cards/image", multer().single("image"), CardController.cardIamgeUpload);

router.put("/cards/:id", CardController.editCard);

router.delete("/cards/:id", CardController.deleteCard);

export default router;
