const express = require('express');
const router = express.router();
const person = require('./person');

router.get('/', (req, res) => {
  res.send({
    status: 200,
    message: 'Successful',
  });
});
module.exports = router;
