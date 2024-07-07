const functions = require("firebase-functions");
const axios = require("axios");
const qs = require("qs");
const path = require("path");
// const nodemailer = require("nodemailer");

// Load environment variables from .env file for local development
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({path: path.resolve(__dirname, ".env")});
}

// Access environment variables
const tenantId = process.env.TENANT_ID;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const emailAddress = process.env.MICROSOFT365_EMAIL_ADDRESS;

if (!tenantId || !clientId || !clientSecret) {
  throw new Error(
      "Missing tenantId, clientId, or clientSecret environment variables.");
}

console.log("Tenant ID: ", tenantId);
console.log("Client ID: ", clientId);
console.log("Client Secret: ", clientSecret ? "Loaded" : "Not Loaded");
console.log("Email Address: ", emailAddress);

/**
 * Function to retrieve access token
 */
async function getAccessToken() {
  const tokenEndpoint =
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  const data = {
    client_id: clientId,
    scope: "https://graph.microsoft.com/.default",
    client_secret: clientSecret,
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(tokenEndpoint, qs.stringify(data), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:",
        error.response ? error.response.data : error.message);
    throw new Error("Failed to get access token");
  }
}


/**
 * Function to send email using Microsoft Graph API
 * @param {string} accessToken - token to access email account
 * @param {string} emailData - data to be emailed
 */
async function sendEmail(accessToken, emailData) {
  const sendMailEndpoint =
      `https://graph.microsoft.com/v1.0/users/${emailAddress}/sendMail`;

  try {
    const response = await axios.post(sendMailEndpoint, emailData, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Email sent successfully: ", response.data);
    return {success: true};
  } catch (error) {
    console.error("Error sending email: ",
        error.response ? error.response.data : error.message);
    throw new Error("Failed to send email");
  }
}

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  const emailData = {
    message: {
      subject: `Contact form submission from ${data.name} (${data.email})`,
      body: {
        contentType: "Text",
        content: `SUBJECT: ${data.subject}\n\n${data.message}`,
      },
      toRecipients: [
        {
          emailAddress: {
            address: emailAddress,
          },
        },
      ],
    },
  };

  try {
    const accessToken = await getAccessToken();
    if (accessToken) {
      await sendEmail(accessToken, emailData);
      return {success: true};
    } else {
      return {success: false, error: "Failed to get access token"};
    }
  } catch (error) {
    console.error("Error: ", error);
    return {success: false, error: error.message};
  }
});
