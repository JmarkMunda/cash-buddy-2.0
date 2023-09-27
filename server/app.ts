import express, { Express } from "express";
const app: Express = express();
const port = 3000; // insert this into env

app.use("/static", express.static("./index.html"));

app.get("/", (req, res) => {
  res.json({ message: "Success!!!" });
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
