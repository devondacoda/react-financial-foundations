const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json('Hey!');
});

module.exports = router;
