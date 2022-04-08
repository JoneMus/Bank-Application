var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const userRouter = require('./routes/user_table');
<<<<<<< HEAD
const transactionsRouter = require('./routes/transactions_table');
=======
const cardRouter = require('./routes/card_table');
const accountRouter = require('./routes/account_table');
const loginRouter = require('./routes/login');

>>>>>>> 0bcaf6fdad0333225dc5c9e70cdfe08107900d20
var app = express();

const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
<<<<<<< HEAD
app.use('/transactions' , transactionsRouter);
=======
app.use('/card', cardRouter);
app.use('/', accountRouter);
app.use('/login', loginRouter);


>>>>>>> 0bcaf6fdad0333225dc5c9e70cdfe08107900d20
module.exports = app;
