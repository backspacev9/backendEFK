import {Router} from "express";
import {memoryStorage} from "multer";

import * as UploadsController from "../controllers/uploads-controller";
import multer from "../utils/multer";

const router = Router();

router.get("/uploads/images", UploadsController.getImages);
router.get("/uploads/audios", UploadsController.getAudios);
router.get("/uploads/videos", UploadsController.getVideos);

router.post("/uploads", multer().any(), UploadsController.filesUpload);
router.delete("/uploads", UploadsController.filesDelete);

export default router;
