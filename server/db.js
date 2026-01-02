const mongoose = require("mongoose");

const DbUri = "";

mongoose
  .connect(DbUri)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));
