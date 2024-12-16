import path from "path";
import dotenv from "dotenv";

const dotenvConfig = {
  path: path.resolve(__dirname, "../../.env"),
};
dotenv.config(dotenvConfig);

import { normalizePort } from "../utils/normalizePort";
import { CorsOptions } from "cors";

export const PORT = normalizePort(process.env.PORT || 5000);

export const corsOptions: CorsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
};
