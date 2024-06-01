const express = require('express');
const corsMiddleware = require('./middleware/corsMiddleware'); 
const emailRoutes = require('./routes/emailRoutes'); 

const app = express();
const port = 3001;


app.use(corsMiddleware);
app.use('/api', emailRoutes);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
