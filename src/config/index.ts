import { config as conf } from "dotenv";
conf();

const config = {
  port: process.env.PORT || 3000,
};

export default config;
