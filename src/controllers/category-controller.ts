import {Request, Response} from "express";
import {db} from "../db";

interface RequestCategory {
  name: string;
  imagesrc: string;
}
export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await db.query("SELECT * FROM category");
  res.json(categories.rows);
};
export const getSingleCategory = async (req: Request, res: Response) => {
  const {id} = req.params;
  const categories = await db.query(`SELECT * FROM category where id=${id}`);
  res.json(categories.rows[0]);
};

export const addCategory = async (req: Request, res: Response) => {
  const {name, imagesrc}: RequestCategory = req.body;
  const query = await db.query(
    `INSERT INTO category (name, imagesrc)
                       VALUES ($1, $2)`,
    [name, imagesrc]
  );

  res.json({status: "category added"});
};
export const editCategory = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {name, imagesrc}: RequestCategory = req.body;
  const query = await db.query(
    `UPDATE category
     SET name = $1, imagesrc = $2
     where id = ${id}`,
    [name, imagesrc]
  );

  res.json({status: "category updated"});
};
export const deleteCategory = async (req: Request, res: Response) => {
  const {id} = req.params;

  const query = await db.query(`DELETE from category where id = ${id}`);

  res.json({status: `category with id:${id} was deleted`});
};
