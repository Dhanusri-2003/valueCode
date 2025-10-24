require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // must be app password
  }
});

// Endpoint to send blueprint PDF
app.post('/send-blueprint', async (req, res) => {
  const { email, blueprintHtml } = req.body;

  if (!email || !blueprintHtml) {
    return res.status(400).json({ message: 'Email and blueprint content required' });
  }

  try {
    // Launch Puppeteer to generate PDF
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(blueprintHtml, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    // Send email with PDF attachment
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your AI Blueprint',
      html: '<p>Hi,</p><p>Find your AI Blueprint attached as PDF.</p>',
      attachments: [
        {
          filename: 'AI_Blueprint.pdf',
          content: pdfBuffer
        }
      ]
    });

    console.log('Email sent info:', info);
    res.json({ message: 'Email sent with PDF successfully!' });
  } catch (error) {
    console.error('Error sending email with PDF:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
