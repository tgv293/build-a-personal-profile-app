import express from 'express';
const app = express();
import apiRouter from './routes/api.js';

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

app.get('/hobbies', (req, res) => {
  res.send('I cycle, go boating, and play guitar.');
});

app.get('/skills', (req, res) => {
  res.send('JavaScript, Node.js, and Express.js!');
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
