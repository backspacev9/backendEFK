import * as pg from "pg";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({path: path.join(__dirname, "../.env")});

export const db = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_USER,
});
