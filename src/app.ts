import express from "express";
import config from "./config";

const app = express();
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("", route);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
