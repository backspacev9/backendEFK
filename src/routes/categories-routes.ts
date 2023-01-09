import express, {Router} from "express";
import {cards} from "../constants";
import {Category, CategoryWithCards} from "../interfaces";

const router = Router({mergeParams: true});

router.get("/categories", async (req, res) => {
  const categories: Array<Category> = cards.map((el) => el.category);
  res.json(categories);
});
router.get("/categories/:id", (req, res) => {
  const id = Number(req.params.id);
  const categoryId = cards.findIndex((el) => el.category.id === id);
  const category: CategoryWithCards = {
    category: cards[categoryId].category,
    cards: cards[categoryId].cards,
  };
  res.send(category);
});
router.post("/categories", (req, res) => {});
router.delete("/categories", (req, res) => {});

export default router;
