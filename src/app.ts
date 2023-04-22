import express, {Router} from "express";
import cards from "./routes/cards-routes";
import categories from "./routes/categories-routes";
import uploads from "./routes/uploads-router";
import cors = require("cors");
import multer from "multer";
import {getAllCards} from "./controllers/card-controller";
import router from "./routes/cards-routes";

// import bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// app.use(express.json({limit: "50m"}));
// app.use(express.urlencoded({limit: "50mb", extended: false}));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cards);
app.use(categories);
app.use(uploads);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
  upServer();
});

const upServer = () => {
  const timeToUpMinutes = 14; //interval in minutes
  const seconds = timeToUpMinutes * 60;
  setInterval(() => {
    router.route("/cards");
  }, seconds);
};
