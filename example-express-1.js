const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/character/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/people/${req.params.id}/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from SWAPI');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
