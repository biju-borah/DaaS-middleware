const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Simulated URLs for App1 and App2
const app1URL = 'https://daas-app1.onrender.com/api/data';
const app2URL = 'https://daas-app2.onrender.com/api/data';

app.get('/api/totalBilling', async (req, res) => {
  try {
    const res2 = await axios.get(app2URL);
    const amount = res2.data.transaction
    const res1 = await axios.post(app1URL, {
      amount: amount
    })
    res.json(res1.data);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`Integration server is running on port ${port}`);
});