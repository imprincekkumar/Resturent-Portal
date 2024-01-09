import Express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

const app = Express();

//DOTENV CONFIG

dotenv.config();

// Middlewares

app.use(cors());
app.use(Express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to FOod Server APP API BASE PROJECT </h1>");
});

//PORT

const PORT = process.env.PORT || 8080;

//server listening

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
