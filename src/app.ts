import express from "express";

const app = express();
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("", route);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
