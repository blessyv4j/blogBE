const express = require("express");
const PORT = 5000;
const artDB = require("./db");
require("dotenv").config();
const cors = require("cors");
const blog = require("./routes/art");
// const dotenv = require("dotenv");

const app = express();
artDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  res.removeHeader();
  console.log("main page");
});

app.use("/api", blog);

app.listen(PORT, () => {
  console.log("Backend is running");
});
