const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://gomycode:${process.env.DB_PASS}@gomycode-engineering-se.nsgt0.mongodb.net/live-facebook-23-09`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));
