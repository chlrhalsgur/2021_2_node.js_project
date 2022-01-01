const express = require('express');
const users = require('../controller/user');
const path = require('path');
const multer = require('multer');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

let image = '';
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done){
      done(null, 'uploads/')
    },
    filename(req, file, done){
      // const ext = path.extname(file.originalname);
      const ext = path.extname(file.originalname);
      image = req.body.client_id + ext;
      done(null, req.body.client_id +  ext)
      // done(null, path.basename(req.session.user_id,ext) +  ext)
      // console.log(req)
    }
  })
});

router.get('/confirm', (req, res) => {
  users.enroll(req, res);
});
router.post('/signUp',upload.single('image'), async (req, res) => {
  try{
    await User.create({
        id: req.body.client_id,
        pwd: await bcrypt.hash(req.body.client_password, 12),
        name: req.body.client_name,
        email: req.body.client_email,
        image: image
    }).then(()=>{
        res.render('index',{ signUp_succ: true });
    }).catch(err => {
        console.log(err);
        res.render('index',{ duplication: true });
    });
  }catch{}
});
router.post('/',(req, res) => {
  res.render('index');
});

router.get('/', async (req, res, next) => {
  try {
    res.render('index', {is_user: req.session.is_logined, user_name: req.session.user_name});
  } catch (err) {
    console.error(err);
    next(err);
  }
});
router.post('/error', async (req, res) => {  users.signIn(req, res); });
router.post('/signIn', async (req, res) => {  users.signIn(req, res); });
router.get('/signOut', (req, res) => {  users.signOut(req, res); });

router.route('/myaccount/:id')
  .get((req, res)=>{  users.getMyaccount(req, res); })
  .put((req, res)=> {  users.updateMyaccount(req, res);  })

module.exports = router;
