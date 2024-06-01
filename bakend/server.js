
// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// require('dotenv').config(); 

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//   const { email, phone, address, message, item } = req.body;

//   try {
//     const response = await axios.post(
//       'https://api.resend.com/emails',
//       {
//         from: 'your-email@example.com',
//         to: 'ayoob324005@example.com',
//         subject: `Contact Form Submission for ${item.name}`,
//         html: `
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Address:</strong> ${address}</p>
//           <p><strong>Message:</strong> ${message}</p>
//           <p><strong>Item:</strong> ${item.name}</p>
//         `,
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, // Changed to RESEND_API_KEY
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error.response ? error.response.data : error.message); // Improved error logging
//     res.status(500).send('Error sending email');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const corsMiddleware = require('./middleware/corsMiddleware'); // Import the corsMiddleware

const app = express();
const port = 3001;

// Use the corsMiddleware
app.use(corsMiddleware);

// Define your routes and other middleware here

app.get('/', (req, res) => {
  res.send('Hello World!'); // Example route
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
