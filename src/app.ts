import express, {Router} from "express";
import cards from "./routes/cards-routes";
import categories from "./routes/categories-routes";
import cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

//app.use("*", categories);
app.use(cards);
app.use(categories);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
