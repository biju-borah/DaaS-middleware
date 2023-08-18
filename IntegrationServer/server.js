const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Simulated URLs for App1 and App2
const app1URL = 'http://localhost:3001/api/data';
const app2URL = 'http://localhost:3002/api/data';

app.get('/get_data_from_app1', async (req, res) => {
  try {
    const response = await axios.get(app1URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from App1' });
  }
});

app.get('/get_data_from_app2', async (req, res) => {
  try {
    const response = await axios.get(app2URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from App2' });
  }
});

app.post('/send_data_to_app1', async (req, res) => {
  const data = req.body;
  try {
    const response = await axios.post(app1URL, data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error sending data to App1' });
  }
});

app.post('/send_data_to_app2', async (req, res) => {
  const data = req.body;
  try {
    const response = await axios.post(app2URL, data);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error sending data to App2' });
  }
});

app.listen(port, () => {
  console.log(`Integration server is running on port ${port}`);
});