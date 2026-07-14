import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 8085;
export const JWT_SECRET = process.env.JWT_SECRET;
