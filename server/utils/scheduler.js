const Letter = require("../models/letterF");
const sendLetterEmail = require("./mailer");

function startScheduler() {
  console.log("Scheduler started");

  setInterval(async () => {
    try {
      const now = new Date();

      const dueLetters = await Letter.find({
        status: "scheduled",
        deliverAt: { $lte: now },
      });

      for (const letter of dueLetters) {
        try {
          console.log("sending");
          await sendLetterEmail(letter.email, letter.letter);
          console.log("sent!");
          letter.status = "delivered";
          await letter.save();
        } catch (err) {
          console.error("Email failed:", err);
        }
      }
    } catch (err) {
      console.error("Scheduler error:", err);
    }
  }, 60 * 1000);
}

module.exports = startScheduler;
