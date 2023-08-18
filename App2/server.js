const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Simulated data
const app2Data = { message: 'Data from App2', transaction: 1000 };

app.get('/api/data2', (req, res) => {
  res.status(200).json(app2Data);
});

app.listen(port, () => {
  console.log(`App2 server is running on port ${port}`);
});