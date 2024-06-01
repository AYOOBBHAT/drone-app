const express = require('express');
const router = express.Router();


const axios = require('axios');


router.post('/send-email', async (req, res) => {
  const { email, phone, address, message, item } = req.body;

  try {
    const response = await axios.post(
      'https://api.resend.com/emails',
      {
        from: 'your-email@example.com',
        to: 'ayoob324005@example.com',
        subject: `Contact Form Submission for ${item.name}`,
        html: `
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Item:</strong> ${item.name}</p>
        `,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.data : error.message); 
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
