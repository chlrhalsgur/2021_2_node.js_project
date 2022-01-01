const express = require('express');
const participating = require('../controller/participating');

const router = express.Router();

router.get('/', (req, res)=> {
    if(req.session.is_logined){
        res.render('join');
    }
    else{
      res.render('index',{not_user: true})
    }
});
router.route('/search_p')
  .get((req, res)=> {  participating.search_p(req, res); })
router.post('/select_p', (req, res)=> {  participating.select_p(req, res); });

module.exports = router;
  