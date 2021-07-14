import express from "express";
import categories from "./categoriesPage/router";

const app = express();
app.use("/api/category", categories);

app.listen(3000, () => {
  console.log("server started");
});
