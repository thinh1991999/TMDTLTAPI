const express = require("express");
const Item = require("../models/Item");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const mailgun = require("mailgun-js");
const bcrypt = require("bcryptjs");
const { upload } = require("../helpers/fileHelper");
const { singleFileUpload } = require("../controllers/fileUploadControllers");
const {
  uploadItemInfo,
  getDetailItem,
} = require("../controllers/itemControllers");
const DOMAIN = "sandbox5cb7d7d867004b238aa8b47e0e30dd04.mailgun.org";
const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });

const router = express.Router();

router.post("/items/upload", upload.array("files"), uploadItemInfo);

router.get("/items/detail/:id", getDetailItem);

module.exports = router;
