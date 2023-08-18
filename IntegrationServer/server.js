const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Simulated URLs for App1 and App2
const app1URL = 'http://localhost:3001/api/data';
const app2URL = 'http://localhost:3002/api/data';

app.get('/api/totalBilling', async (req, res) => {
  try {
    const res2 = await axios.get(app2URL, {
      headers: {
        Accept: "application/json",
        "User-Agent": "axios 0.21.1"
      }
    });
    const amount = 10
    const res1 = await axios.post(app1URL, {
      headers: {
        Accept: "application/json",
        "User-Agent": "axios 0.21.1"
      }
    }, {
      amount: amount
    })
    res.json(res1);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Integration server is running on port ${port}`);
});