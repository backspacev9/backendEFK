import {Router} from "express";

import * as UploadsController from "../controllers/uploads-controller";
import multer from "../utils/multer";

const router = Router();

router.get("/uploads/images", UploadsController.getImages);
router.get("/uploads/audios", UploadsController.getAudios);

export default router;
