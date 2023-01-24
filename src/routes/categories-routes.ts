import express, {Router} from "express";
import {CARDS} from "../constants";
import {Category, CategoryWithCards} from "../interfaces";

const router = Router({mergeParams: true});

router.get("/categories", async (req, res) => {
  const categories: Array<Category> = CARDS.map((el) => el.category);
  res.json(categories);
});
router.get("/categories/:id", (req, res) => {
  const id = Number(req.params.id);
  const categoryId = CARDS.findIndex((el) => el.category.id === id);
  const category: CategoryWithCards = {
    category: CARDS[categoryId].category,
    cards: CARDS[categoryId].cards,
  };
  res.send(category);
});
router.post("/categories", (req, res) => {});
router.delete("/categories", (req, res) => {});

export default router;
