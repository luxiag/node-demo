const express = require("express");
const multer = require("multer");

const router = express.Router();

const { UPLOAD_PATH } = require("../config/keys");

const Result = require("../models/Result");

router.post("/upload-avatar", multer({ dest: `${UPLOAD_PATH}/avatar` }), () => {
  if (!req.file || req.file.lenght === 0) {
    new Result("失败").fail(res);
  } else {
    new Result("成功").success(res);
  }
});
