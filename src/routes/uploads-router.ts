import {Router} from "express";
import {memoryStorage} from "multer";

import * as UploadsController from "../controllers/uploads-controller";
import multer from "../utils/multer";

const router = Router();

router.get("/uploads/images", UploadsController.getImages);
router.post(
  "/uploads/images",
  multer({storage: memoryStorage()}).any(),
  UploadsController.imageUpload
);
router.delete("/uploads", UploadsController.fileDelete);

router.get("/uploads/audios", UploadsController.getAudios);
router.post("/uploads/audios", multer().array("audio"), UploadsController.imageUpload);

export default router;
