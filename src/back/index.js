const express = require("express");
const app = express();
const cors = require("cors");
const { default: axios } = require("axios");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
require("dotenv").config();

const hostname = "localhost";
const port = 3035;
const senderENV = process.env.MAILER_SENDER;
const appPassENV = process.env.MAILER_APP_PASS;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: senderENV,
    pass: appPassENV,
  },
});

const buildEmailBody = (to, attachment) => ({
  from: senderENV,
  to,
  subject: "PDF About the transaction created!",
  text: "This is your document attachment.",
  attachments: [
    {
      filename: "attachment.pdf",
      content: attachment,
    },
  ],
});

const generatePDF = (body, done) => {
  const pdf = new PDFDocument();

  let buffers = [];
  pdf.on("data", buffers.push.bind(buffers));
  pdf.on("end", () => {
    let pdfData = Buffer.concat(buffers);

    if (!done) return;

    done(pdfData);
  });

  const bodyPDF = `
    email: ${body.to}
    hash: ${body.hash}
    trsxid: ${body.trsxid}
    nombre: ${body.name}
    apellidos: ${body.lastName}
  `;

  pdf.fontSize(20).text("TRANSACTION DETAILS", 200, 100);
  pdf.fontSize(12).text(bodyPDF, 100, 120);
  pdf.end();
};

const formatParams = (params) => {
  if (!params) return "";
  return Object.entries(params).reduce((acc, valueItem) => {
    const [key, value] = valueItem;
    return `${acc}${acc === "" ? "" : "&"}${key}=${value}`;
  }, "");
};

app.post("/", async (req, res) => {
  const params = formatParams(req.body);
  const url = `https://api.stamping.io/stamp?${params}`;
  const { data } = await axios.post(url);

  res.send({ data });
});

const sendEmail = (to, attachment) => {
  const emailBody = buildEmailBody(to, attachment);
  transporter.sendMail(emailBody, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

app.post("/email", async (req, res) => {
  try {
    const body = req.body;
    generatePDF(req.body, (pdfData) => sendEmail(body.to, pdfData));
    res.send({
      message: "Sent successfully",
    });
  } catch (error) {
    res.send({
      message: "Error on send the email",
    });
  }
});

app.post("/certificate", async (req, res) => {
  const { data } = await axios.get(
    `https://stamping.io/api/hash/certificate?hash=${req.body.hashIPFS}`,
    {
      responseType: "blob",
    }
  );
  console.log(data);

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log(`[Server running on ${hostname}:${port}]`);
