import express, {Router} from "express";
import cards from "./routes/cards-routes";
import categories from "./routes/categories-routes";
import cors = require("cors");

import {create} from "domain";
import {Category} from "./interfaces";
import {CARDS} from "./constants";
import {db} from "./db";

// import bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// const insertindb = async () => {
//   // const categories: Array<Category> = CARDS.map((el) => el.category);
//   // for (const el of categories) {
//   //   const query = `INSERT INTO category (name, imageSrc)
//   //                      VALUES ('${el.name}','${el.image}');`;
//   //   await db.query(query);
//   // }

//   for await (const cat of CARDS) {
//     for await (const card of cat.cards) {
// const query = `INSERT INTO card (word, translation,imageSrc,audioSrc,category_id)
//                  VALUES (
//                   '${card.word}',
//                   '${card.translation}',
//                   '${card.image}',
//                   '${card.audioSrc}',
//                   '${cat.category.id}'
//                   );
//              `;

//       await db.query(query);
//     }
//   }

//   //console.log(AllCards);
// };
const PORT = process.env.PORT || 3000;
// process.env.DB_CONNECTION_STRING;
//app.use("*", categories);
app.use(cards);
app.use(categories);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

// db.connect().then(async () => {
//   await insertindb().then(() => {
//     console.log("done");
//   });
//   db.end();
// });

//insertindb();
