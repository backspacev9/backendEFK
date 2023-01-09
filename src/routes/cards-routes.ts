import express, {request, Request, Router} from "express";
import {cards} from "../constants";

const router = Router();
interface PostCard {
  idCategory: number;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

router.get("/cards", (req, res) => {
  const nextCardId = cards.map((el) => el.cards).reduce((pre, cur) => pre.concat(cur)).length;
  res.send(`asdf-${nextCardId}`);
});
router.post("/cards", async (req, res) => {
  // const categoryId = cards.findIndex((el) => el.category.id === req.body.idCategory);
  // const nextCardId = cards.map((el) => el.cards).reduce((pre, cur) => pre.concat(cur)).length + 1;
  // cards[categoryId].cards.push({
  //   id: nextCardId,
  //   word: req.body.word,
  //   translation: req.body.translation,
  //   image: req.body.image,
  //   audioSrc: req.body.audioSrc,
  // });
  res.send(req.body);
});

router.put("/cards", (req, res) => {});
router.delete("/cards", (req, res) => {});

export default router;
