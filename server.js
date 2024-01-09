import Express from "express";

const app = Express();

app.listen(3000);

app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});
