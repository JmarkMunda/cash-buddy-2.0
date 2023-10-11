import passport from "passport";
import passportLocal from "passport-local";
import User from "./models/user";
const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err: any, user: any) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: "User not found" });

      user.comparePassword(password, (err: any, result: any) => {
        if (err) return done(err);
        if (!result) {
          return done(null, false, { message: "Incorrect Password" });
        }
        return done(null, result);
      });

      return done(null, user);
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err: Error, user: any) => {
    done(err, user);
  });
});
