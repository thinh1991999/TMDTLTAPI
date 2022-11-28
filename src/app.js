const express = require("express");
const path = require("path");
const userRouter = require("./routers/user");
const itemRouter = require("./routers/item");
const shopRouter = require("./routers/shop");
const port = process.env.PORT;
require("./db/db");

const app = express();
var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
});
app.use("/src/uploads", express.static(path.join(__dirname, "./uploads")));
app.use(express.json());
app.use(userRouter);
app.use(itemRouter);
app.use(shopRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
