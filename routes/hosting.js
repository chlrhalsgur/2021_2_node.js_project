const express = require('express');
const hosting = require('../controller/hosting');

const router = express.Router();

router.get('/', (req, res)=> {
  if(req.session.is_logined){
    res.render('create');
  }
  else{
    res.render('index',{not_user: true})
  }
});
router.get('/search_h', (req, res)=> {  hosting.search_h(req, res); });
router.get('/select_room', (req, res)=> {  hosting.select_room(req, res); });
router.post('/apply', (req, res)=> {  hosting.apply(req, res); });


module.exports = router;
