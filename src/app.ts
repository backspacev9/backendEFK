import express from "express";

const app = express();
app.use("/api/category");

app.listen(3000, () => {
  console.log("server started");
});
