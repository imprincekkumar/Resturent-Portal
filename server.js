import Express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

const app = Express();

// Middlewares

app.use(cors());
app.use(Express.json());
app.use(morgan("dev"));

app.listen(3000);

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to FOod Server APP API BASE PROJECT </h1>");
});
