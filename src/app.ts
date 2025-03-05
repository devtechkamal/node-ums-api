import express from "express";
import config from "./config";
import routes from "./routes";
import { errorHandler } from "./utils/errorHandler";

const app = express();
app.use(express.json());

app.use("", routes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
