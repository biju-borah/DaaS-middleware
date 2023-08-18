const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Simulated data
const app1Data = { message: 'Data from App1', transaction: 500 };

app.get('/api/data', (req, res) => {
  res.status(200).json(app1Data);
});

app.post('/api/data', (req, res) => {
  const amount = req.body.amount
  const totalBill = amount + app1Data.transaction

  res.status(200).json({
    message: 'Total billing',
    totalBill: totalBill
  });
});

app.listen(port, () => {
  console.log(`App1 server is running on port ${port}`);
});
