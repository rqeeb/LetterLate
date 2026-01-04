const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const letterSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  letter: {
    type: String,
    required: true,
  },
  audience: {
    type: String,
    required: true,
  },

  deliverAt: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["scheduled", "delivered"],
    default: "scheduled",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Letter = mongoose.model("Letter", letterSchema);
module.exports = Letter;
