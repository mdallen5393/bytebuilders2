const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// update this to use the desired email account later; make a new app password for that account
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "itsmatthewallen1@gmail.com",
    pass: "acjf zmri bkut dszb",
  },
});

exports.sendContactEmail = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: data.email,
    to: "itsmatthewallen1@gmail.com",
    subject: `Contact form submission from ${data.name} (${data.email})`,
    text: data.message,
  };

  return transporter.sendMail(mailOptions)
      .then(() => {
        return {success: true};
      })
      .catch((error) => {
        return {success: false, error: error.toString()};
      });
});
