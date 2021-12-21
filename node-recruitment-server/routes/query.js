const express = require("express");

const router = express.Router();

const Result = require("../models/Result");
router.get("/", function (req, res) {
  new Result("query接口正常").success();
});

router.get("/cities", (req, res) => {
  const cities = require("../mock/cities.json");
  new Result(cities).success(res);
});
module.exports = router;
