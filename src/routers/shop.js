const express = require("express");
const Item = require("../models/Item");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const mailgun = require("mailgun-js");
const bcrypt = require("bcryptjs");
const { upload } = require("../helpers/fileHelper");
const { singleFileUpload } = require("../controllers/fileUploadControllers");
const { createShop } = require("../controllers/shopControllers");

const router = express.Router();

router.post("/shop/create", auth, createShop);

// router.get("/items/detail/:id", getDetailItem);

module.exports = router;
