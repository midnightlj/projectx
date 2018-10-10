var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.sendFile('../client/dist/index.html', { title: 'Express' });
});

module.exports = router;
