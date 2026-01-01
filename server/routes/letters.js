const express = require("express");
const app = express();
const port = 2645;

app.get("/yes", (req, res) => {
  console.log("WORKS!");
  res.send({ working: "yes!", status: "ok" });
});

app.post("/letters", (req, res) => {
  console.log("WORKS!");
  res.send({ working: "yes!", status: "ok" });
});

app.listen(port);
