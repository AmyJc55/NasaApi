const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const API_KEY = 'SHV5c4grtQUPTnZN9QP4BLt8G0f6mL5gUzZMnzx7';

app.get('/nasa-apod', async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).send({ message: 'Date is required' });
  }

  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);  // Enviar la respuesta al cliente
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send({ message: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
