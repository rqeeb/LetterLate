const express = require("express");
const app = express();
const port = 2645;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/letters", (req, res) => {
  // if (req) res.send({ working: "yes", status: "200" });
  // else res.send({ working: "no", status: "404" });

  console.log(req.body);

  res.status(200).json({
    success: true,
    message: "Letter received",
  });
});

app.listen(port);
