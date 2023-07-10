const express = require("express");
const jwt = require("jsonwebtoken");
const boom = require("boom");
const { body, validationResult } = require("express-validator");

const Result = require("../models/Result");
const User = require("../db/User");
const { PWD_SALT, PRIVATE_KEY, JWT_EXPIRED } = require("../config/keys");

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", (req, res) => {
  const { email } = req.body;
  User.findOne({ email }).then((user) => {
    if (user) {
      new Result(null).fail("邮箱已被注册");
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
      });
    }
  });
});
module.exports = router;
