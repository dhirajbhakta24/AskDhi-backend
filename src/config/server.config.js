import dotenv from "dotenv"

dotenv.config()

export const PORT = process.env.PORT || 8000;
export const ATLAS_DB_URL = process.env.ATLAS_DB_URL;
export const JWT_SECRET = process.env.JWT_SECRET;