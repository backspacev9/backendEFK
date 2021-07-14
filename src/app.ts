import express from "express";
import categories from "./categoriesPage/router";

const app = express();
const PORT = process.env.PORT || 3030;
app.use("/api/category", categories);

app.listen(PORT, () => {
  console.log("server started");
});
