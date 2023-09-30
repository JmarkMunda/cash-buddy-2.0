import express, { Express } from "express";
import passport from "passport";
import authRouter from "./routes/auth";
import session from "express-session";
const app: Express = express();
const port = 3000; // insert this into env

app.use("/static", express.static("./index.html"));

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", authRouter);

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
