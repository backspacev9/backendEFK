import { Router } from "express";
import { getCategory } from "./categoryPage";
const router = Router();

router.get("/", async (req, res) => {
  const categories = await getCategory();
  res.json(categories);
});

export default router;
