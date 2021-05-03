import * as dotenv from "dotenv";
import * as path from "path";

const envPath = (file) => path.join(__dirname, file);

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  const envs = {
    dev: envPath("/envs/.dev.env"),
    test: envPath("/envs/.test.env"),
  };

  dotenv.config({ path: envs[process.env.NODE_ENV] });
}

const config = {
  port: process.env.PORT,
  jwtSecret: process.env.AUTH_SECRET,
  database: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
  },
  queue: {
    url: process.env.QUEUE_REDIS_URL,
  },
  mail: {
    host: process.env.MAIL_HOST ?? "smtp.mailtrap.io",
    port: process.env.MAIL_PORT ?? 2525,
    auth: {
      user: process.env.MAIL_USER ?? "75f9c408316c0c",
      pass: process.env.MAIL_PASS ?? "7f6c991c2eea22",
    },
  },
};

export default config;
