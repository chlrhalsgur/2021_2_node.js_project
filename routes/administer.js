const express = require('express');
const administer = require('../controller/administer');

const router = express.Router();

//administer
router.get('/adm_Login',(req, res)=> {
  administer.adm_Login(req, res);
});
router.get('/adm_index',(req, res)=> {
  if(req.session.is_adm){
    administer.adm_index(req, res);
  }
  else{
    res.render('adm_Login',{
      is_adm: req.session.is_adm
    })
  }
});
router.get('/adm_search',(req, res)=> {
  if(req.session.is_adm){
    administer.adm_search(req, res);
  }
  else{
    res.render('adm_Login',{
      is_adm: req.session.is_adm
    })
  }
});
router.get('/adm_meetingList',(req, res)=> {
  if(req.session.is_adm){
    administer.adm_meetingList(req, res);
  }
  else{
    res.render('adm_Login',{
      is_adm: req.session.is_adm
    })
  }
});
router.get('/adm_searchMeeting',(req, res)=> {
  if(req.session.is_adm){
    administer.adm_searchMeeting(req, res);
  }
  else{
    res.render('adm_Login',{
      is_adm: req.session.is_adm
    })
  }
});
router.get('/adm_choose',(req, res)=> {
  if(req.session.is_adm){
    administer.adm_choose(req, res);
  }
  else{
    res.render('adm_Login',{
      is_adm: req.session.is_adm
    })
  }
});
router.get('/adm_edit',(req, res)=> {
  if(req.session.is_adm){
    administer.adm_edit(req, res);
  }
  else{
    res.render('adm_Login',{
      is_adm: req.session.is_adm
    })
  }
});
router.get('/adm_adminLogout',(req, res)=> {  administer.logOut(req, res); });
router.delete('/delete_user',(req, res)=> {  administer.delete_user(req, res); });
router.delete('/delete_conf',(req, res)=> {  administer.delete_conf(req, res);});
router.post('/signin_adm',(req, res)=> {  administer.signin_adm(req, res); });
router.post('/adm_search_user',(req, res)=> {  administer.adm_search_user(req, res); });
router.post('/adm_search_con',(req, res)=> {  administer.adm_search_con(req, res); });

module.exports = router;
