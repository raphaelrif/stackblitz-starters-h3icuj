const express = require('express');
const app = express();
const port = 3010;

const router = express.Router();

router.get('/1', (req, res) => {
  res.send('1');
});

router.get('/2', (req, res) => {
  res.send('2');
});

app.use('/router', router);

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});

app.get('/', (req, res) => {
  // res.sendFile(resolve(__dirname, 'pages/index.html'));
  res.send('salut');
});

app.get('/3', (req, res) => {
  // res.sendFile(resolve(__dirname, 'pages/index.html'));
  res.send('la forme');
});
