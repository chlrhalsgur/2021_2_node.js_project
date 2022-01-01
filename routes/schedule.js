const express = require('express');
const calendar = require('../controller/calendar');

const router = express.Router();


router.get('/', (req, res)=> {
    if(req.session.is_logined){
      calendar.init(req, res);
    }
    else{
      res.render('index',{not_user: true})
    }
  });

router.post('/:code', (req, res)=> {
  calendar.getDetails(req, res);
});

module.exports = router;
