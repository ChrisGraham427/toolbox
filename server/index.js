const express = require("express");
const app = express();
const cors = require("cors");
const projectRoutes = require("./routes/project");
const contactRoutes = require("./routes/contact");
const imageRoutes = require("./routes/image");
const taskRoutes = require("./routes/task");
const path = require("path");
const helmet = require("helmet");
const multer = require("multer");
//----PASSPORT----
// const GoogleStrategy = require("passport-google-oauth").OAuthStrategy;
const logger = require("morgan");
const passport = require("passport");
const session = require("express-session");
const GitHubStrategy = require("passport-github").Strategy;
const chalk = require("chalk");
require("dotenv").config();

const {
  PORT,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  SESSION_SECRET,
} = process.env;

app.use(express.json());
app.use(helmet());
app.use(logger("dev"));
app.use(cors());

app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//---------------

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/github/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github"),
  (req, res) => {
    res.redirect("http://localhost:3000/");
  }
);

//====GOOGLE LOGIN
// passport.use(
//   new GoogleStrategy(
//     {
//       consumerKey: GOOGLE_CONSUMER_KEY,
//       consumerSecret: GOOGLE_CONSUMER_SECRET,
//       callbackURL: "http://localhost:8080/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return done(err, user);
//       });
//     }
//   )
// );
//=====MULTER FILE UPLOAD
app.use(express.urlencoded({ extended: true }));
app.use("/image/images", express.static(path.join(__dirname, "/uploads")));
//======================================
app.use("/project", projectRoutes);
app.use("/contact", contactRoutes);
app.use("/image", imageRoutes);
app.use("/task", taskRoutes);

//-------PASSPORT ROUTING-----
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
app.get("/", (req, res) => {
  res.send(`<h1>USER LOGIN</h1>`);
});

app.get("/profile", (req, res) => {
  res.json(user);
});

app.get("/auth/logout", (req, res) => {
  console.log("logging out");
  user = {};
  req.logout();
  res.json({ status: 200, message: "logged out" });
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: "https://www.google.com/m8/feeds" })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);
//---------------------------------
app.listen(8080, () => {
  console.log(`listening at 8080`);
});
