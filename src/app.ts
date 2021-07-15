import express from "express";
import categories from "./categoriesPage/router";

const app = express();
let PORT = process.env.PORT || 3000;
app.use("*", categories);

app.listen(PORT, () => {
  console.log("server started");
});
