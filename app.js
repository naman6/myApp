const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/endpoint1', (req, res) => {
  res.json({ message: 'This is endpoint 1' });
});

app.get('/api/endpoint2', (req, res) => {
  res.json({ message: 'This is endpoint 2' });
});

app.get('/api/endpoint3', (req, res) => {
  res.json({ message: 'This is endpoint 3' });
});

app.get('/api/endpoint4', (req, res) => {
  res.json({ message: 'This is endpoint 4' });
});

app.get('/api/endpoint5', (req, res) => {
  res.json({ message: 'This is endpoint 5' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
