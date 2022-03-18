const express= require("express");
const router = express.Router();
const { getAllArt } = require("../controllers/article");

router.get("/",getAllArt);

module.exports =router;