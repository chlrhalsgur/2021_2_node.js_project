const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
var methodOverride = require('method-override');


const { sequelize } = require('./models');
const indexRouter = require('./routes/');
const adminRouter = require('./routes/administer');
const userRouter = require('./routes/user');
const hostingRouter = require('./routes/hosting');
const participatingRouter = require('./routes/participating');
const scheduleRouter = require('./routes/schedule');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  is_logined: true,
  user_id:'s',
  user_name: '',
  is_adm: true,
  user_pwd : '',
  user_email: '',
  cookie: {
    httpOnly: true,
    secure: false,
    is_logined: false
  },
  name: 'session-cookie',
}));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/hosting', hostingRouter);
app.use('/schedule', scheduleRouter);
app.use('/participating', participatingRouter);
app.use('/adm', adminRouter);

app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});



