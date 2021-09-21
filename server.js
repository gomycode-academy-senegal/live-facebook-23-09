const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES //^6.0.7
app.use("/api", require("./routes/user.routes"));

//APPLICATION
app.listen(process.env.PORT, () => {
  console.log(`Listening on port : ${process.env.PORT}`);
});
