const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

//routes
router.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
  //   res.send('Post a new page');
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;
