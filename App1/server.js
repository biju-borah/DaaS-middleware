const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Simulated data
const app1Data = { message: 'Data from App1' };

app.get('/api/data', (req, res) => {
  res.json(app1Data);
});

app.listen(port, () => {
  console.log(`App1 server is running on port ${port}`);
});
