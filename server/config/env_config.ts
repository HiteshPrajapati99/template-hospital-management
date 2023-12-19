import dotEnv from "dotenv";

dotEnv.config({ path: ".env" });

export const  {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
    PORT,
    ALLOW_ORIGIN,
    NODE_MODE,
    JWT_SCRET
} = process.env;