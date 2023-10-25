const express = require('express');
const router = express.Router();

router.get('/1', (req, res) => {
  res.send('1');
});

router.get('/2', (req, res) => {
  res.send('2');
});

module.exports = router;
