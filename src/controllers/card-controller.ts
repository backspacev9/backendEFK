import {Request, Response} from "express";
import {db} from "../db";

interface RequestCard {
  word: string;
  translation: string;
  imagesrc: string;
  audiosrc: string;
  category_id: number;
}
export const getAllCards = async (req: Request, res: Response) => {
  const cards = await db.query("SELECT * FROM card");
  res.json(cards.rows);
};
export const getSingleCard = async (req: Request, res: Response) => {
  const {id} = req.params;
  const cards = await db.query(`SELECT * FROM card where id=${id}`);
  res.json(cards.rows[0]);
};
export const getCardsByCategory = async (req: Request, res: Response) => {
  const {id} = req.params;
  const cards =
    await db.query(`SELECT card.id,card.word,card.translation,card.imagesrc,card.audiosrc
      FROM card left join category 
      on card.category_id = category.id 
      where category.id = ${id}`);
  res.json(cards.rows);
};
export const addCard = async (req: Request, res: Response) => {
  const {word, translation, imagesrc, audiosrc, category_id}: RequestCard = req.body;
  const query = await db.query(
    `INSERT INTO card (word, translation,imageSrc,audioSrc,category_id)
                       VALUES ($1, $2, $3, $4, $5)`,
    [word, translation, imagesrc, audiosrc, category_id]
  );

  res.json({status: "card added"});
};
export const editCard = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {word, translation, imagesrc, audiosrc, category_id}: RequestCard = req.body;
  const query = await db.query(
    `UPDATE card
     SET word = $1, translation = $2,imageSrc = $3,audioSrc = $4,category_id = $5
     where id = ${id}`,
    [word, translation, imagesrc, audiosrc, category_id]
  );

  res.json({status: "card updated"});
};
export const deleteCard = async (req: Request, res: Response) => {
  const {id} = req.params;

  const query = await db.query(`DELETE from card where id = ${id}`);

  res.json({status: `card with id:${id} was deleted`});
};