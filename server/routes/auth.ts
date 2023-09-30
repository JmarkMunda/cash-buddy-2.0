import express from "express";
import passport from "passport";

const router = express.Router();

router.post(
  "login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

export default router;
