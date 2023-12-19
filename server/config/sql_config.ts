import mysql2 from "mysql2";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./env_config";

const pool = mysql2.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: +DB_PORT!,
  database: DB_NAME,
  connectionLimit: 10,
  maxIdle: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

const promisable_pool = pool.promise();

export default promisable_pool;
