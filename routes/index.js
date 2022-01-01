const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.render('index', {is_user: req.session.is_logined, user_name: req.session.user_name});
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
