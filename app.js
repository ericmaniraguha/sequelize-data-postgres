const express = require('express');
const { appendFileSync } = require('fs');
require('dotenv').config();
const router = express.Router();
const routes = require('./routes/index');

app.use(routes());
app.use(express.json());

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Our app is listening on http://localhost:${port}`);
});
module.exports = router;
