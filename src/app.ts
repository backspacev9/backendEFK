import express, {Router} from "express";
import cards from "./routes/cards-routes";
import categories from "./routes/categories-routes";
import cors = require("cors");
// import bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cards);
app.use(categories);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
