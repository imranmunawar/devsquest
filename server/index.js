import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendEmail } from './services/emailService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
      });
    }

    await sendEmail({
      to: 'devsquesthub@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    res.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.',
    });
  }
});

app.post('/api/quotation', async (req, res) => {
  try {
    const { name, email, company, phone, service, budget, timeline, description } = req.body;

    if (!name || !email || !service || !budget || !timeline || !description) {
      return res.status(400).json({
        success: false,
        error: 'Required fields are missing',
      });
    }

    await sendEmail({
      to: 'devsquesthub@gmail.com',
      subject: `Quotation Request: ${service}`,
      html: `
        <h2>New Quotation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Description:</strong></p>
        <p>${description.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Quotation Request
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Phone: ${phone || 'N/A'}
        Service: ${service}
        Budget: ${budget}
        Timeline: ${timeline}
        Description: ${description}
      `,
    });

    res.json({
      success: true,
      message: 'Quotation request sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send quotation request. Please try again later.',
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
