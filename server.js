import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import sgMail from "@sendgrid/mail";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// SendGrid setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));


app.post("/api/contact", async (req, res) => {
  const {
    fullName,
    email,
    phone,
    cityState,
    truckDetails,
    vin,
    intendedUse,
    timeline,
    packageInterest,
    idealBuild,
    agreeToVariablePricing,
  } = req.body;

  // Required fields check
  if (
    !fullName ||
    !email ||
    !phone ||
    !cityState ||
    !truckDetails ||
    !intendedUse ||
    !timeline ||
    !agreeToVariablePricing
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const textBody = `
NEW F-450 INQUIRY

Name: ${fullName}
Email: ${email}
Phone: ${phone}
City / State: ${cityState}

Truck Details: ${truckDetails}
VIN: ${vin || "N/A"}

Intended Use: ${intendedUse}
Timeline: ${timeline}
Package Interest: ${packageInterest || "Not specified"}

Ideal Build Description:
${idealBuild || "Not provided"}

Agreed to variable pricing: YES
  `.trim();

  const htmlBody = `
    <h2>New F-450 Inquiry</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>City / State:</strong> ${cityState}</p>

    <hr/>

    <p><strong>Truck Details:</strong> ${truckDetails}</p>
    <p><strong>VIN:</strong> ${vin || "N/A"}</p>

    <p><strong>Intended Use:</strong> ${intendedUse}</p>
    <p><strong>Timeline:</strong> ${timeline}</p>
    <p><strong>Package Interest:</strong> ${packageInterest || "Not specified"
    }</p>

    <hr/>

    <p><strong>Ideal Build Description:</strong></p>
    <p>${(idealBuild || "Not provided").replace(/\n/g, "<br/>")}</p>

    <hr/>

    <p><strong>Agreed to variable pricing:</strong> YES</p>
  `;

  const msg = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: "New Inquiry – F-450 Single Wheel Conversion",
    text: textBody,
    html: htmlBody,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    res.status(500).json({ error: "Email failed to send" });
  }
});



app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
